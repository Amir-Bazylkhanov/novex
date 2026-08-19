/**
 * Community chat data layer for /community: channels, messages, reactions,
 * reports. Pure Supabase access, no React.
 *
 * Author lookups go through the get_public_profiles RPC, which returns
 * public fields (id, full_name, avatar_url, role) for any user id. A
 * consumer's generic «Ученик» label is now only a fallback for genuinely
 * missing profile rows.
 */
import { supabase } from './supabaseClient.ts';

export const MAX_MESSAGE_LENGTH = 2000;
export const MESSAGE_PAGE_SIZE = 50;

export interface CommunityChannel {
  id: string;
  slug: string;
  name: string;
  description: string | null;
}

export interface CommunityAuthor {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: string | null;
}

/** Aggregated view of community_reactions rows for one emoji on one message. */
export interface ReactionGroup {
  emoji: string;
  count: number;
  userIds: string[];
}

export interface CommunityMessageRow {
  id: string;
  channel_id: string;
  user_id: string;
  content: string;
  reply_to_id: string | null;
  created_at: string;
}

export interface CommunityMessage extends CommunityMessageRow {
  author: CommunityAuthor | null;
  reply_to: CommunityMessage | null;
  reactions: ReactionGroup[];
}

interface ReactionRow {
  message_id: string;
  user_id: string;
  emoji: string;
}

/** Fold raw reaction rows into per-emoji groups. */
export function groupReactions(rows: Array<{ user_id: string; emoji: string }>): ReactionGroup[] {
  const groups: ReactionGroup[] = [];
  for (const row of rows) {
    const existing = groups.find((g) => g.emoji === row.emoji);
    if (existing) {
      if (!existing.userIds.includes(row.user_id)) {
        existing.userIds.push(row.user_id);
        existing.count += 1;
      }
    } else {
      groups.push({ emoji: row.emoji, count: 1, userIds: [row.user_id] });
    }
  }
  return groups;
}

/** Return a copy of `groups` with the user's reaction toggled on or off. */
export function withReaction(
  groups: ReactionGroup[],
  userId: string,
  emoji: string,
  on: boolean,
): ReactionGroup[] {
  const next = groups.map((g) => ({ ...g, userIds: [...g.userIds] }));
  const idx = next.findIndex((g) => g.emoji === emoji);
  if (on) {
    if (idx >= 0) {
      if (!next[idx].userIds.includes(userId)) {
        next[idx].userIds.push(userId);
        next[idx].count += 1;
      }
    } else {
      next.push({ emoji, count: 1, userIds: [userId] });
    }
  } else if (idx >= 0) {
    next[idx].userIds = next[idx].userIds.filter((id) => id !== userId);
    next[idx].count = next[idx].userIds.length;
    if (next[idx].count <= 0) next.splice(idx, 1);
  }
  return next;
}

export async function fetchChannels(): Promise<CommunityChannel[]> {
  const { data, error } = await supabase
    .from('community_channels')
    .select('id, slug, name, description')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []) as CommunityChannel[];
}

/**
 * Look up display data for message authors via the get_public_profiles RPC
 * (security definer, public fields only). Returns a partial or empty map only
 * when a profile row genuinely doesn't exist — callers render a fallback name.
 */
export async function fetchAuthors(userIds: string[]): Promise<Map<string, CommunityAuthor>> {
  const map = new Map<string, CommunityAuthor>();
  const ids = Array.from(new Set(userIds));
  if (ids.length === 0) return map;
  const { data, error } = await supabase.rpc('get_public_profiles', { p_ids: ids });
  if (error) return map;
  for (const row of (data ?? []) as CommunityAuthor[]) map.set(row.id, row);
  return map;
}

/** Reactions for a set of messages, keyed by message id. */
export async function fetchReactionsFor(
  messageIds: string[],
): Promise<Map<string, ReactionGroup[]>> {
  const map = new Map<string, ReactionGroup[]>();
  if (messageIds.length === 0) return map;
  const { data, error } = await supabase
    .from('community_reactions')
    .select('message_id, user_id, emoji')
    .in('message_id', messageIds);
  if (error) throw error;
  const byMessage = new Map<string, ReactionRow[]>();
  for (const row of (data ?? []) as ReactionRow[]) {
    const list = byMessage.get(row.message_id) ?? [];
    list.push(row);
    byMessage.set(row.message_id, list);
  }
  byMessage.forEach((rows, id) => map.set(id, groupReactions(rows)));
  return map;
}

const MESSAGE_COLUMNS = 'id, channel_id, user_id, content, reply_to_id, created_at';

/** Newest MESSAGE_PAGE_SIZE messages of a channel, oldest first, with authors,
 *  reactions and reply targets resolved. */
export async function fetchMessages(channelId: string): Promise<CommunityMessage[]> {
  const { data, error } = await supabase
    .from('community_messages')
    .select(MESSAGE_COLUMNS)
    .eq('channel_id', channelId)
    .order('created_at', { ascending: false })
    .limit(MESSAGE_PAGE_SIZE);
  if (error) throw error;
  const rows = ((data ?? []) as CommunityMessageRow[]).reverse();
  if (rows.length === 0) return [];

  // Reply targets usually sit inside the page; fetch only the missing ones.
  const replyIds = Array.from(
    new Set(
      rows
        .map((r) => r.reply_to_id)
        .filter((id): id is string => !!id && !rows.some((r) => r.id === id)),
    ),
  );
  const [reactionsByMessage, replyRes] = await Promise.all([
    fetchReactionsFor(rows.map((r) => r.id)),
    replyIds.length > 0
      ? supabase.from('community_messages').select(MESSAGE_COLUMNS).in('id', replyIds)
      : Promise.resolve({ data: [] as CommunityMessageRow[], error: null }),
  ]);
  if (replyRes.error) throw replyRes.error;

  const allRows = new Map<string, CommunityMessageRow>();
  for (const r of rows) allRows.set(r.id, r);
  for (const r of (replyRes.data ?? []) as CommunityMessageRow[]) allRows.set(r.id, r);

  const authorIds = new Set<string>();
  allRows.forEach((r) => authorIds.add(r.user_id));
  const authors = await fetchAuthors(Array.from(authorIds));

  return rows.map((row) => {
    const replyRow = row.reply_to_id ? allRows.get(row.reply_to_id) : undefined;
    return {
      ...row,
      author: authors.get(row.user_id) ?? null,
      reply_to: replyRow
        ? {
            ...replyRow,
            author: authors.get(replyRow.user_id) ?? null,
            reply_to: null,
            reactions: [],
          }
        : null,
      reactions: reactionsByMessage.get(row.id) ?? [],
    };
  });
}

export async function sendMessage(
  channelId: string,
  userId: string,
  content: string,
  replyToId: string | null,
): Promise<CommunityMessageRow> {
  const { data, error } = await supabase
    .from('community_messages')
    .insert({ channel_id: channelId, user_id: userId, content, reply_to_id: replyToId })
    .select(MESSAGE_COLUMNS)
    .single();
  if (error) throw error;
  return data as CommunityMessageRow;
}

export async function deleteMessage(messageId: string): Promise<void> {
  const { error } = await supabase.from('community_messages').delete().eq('id', messageId);
  if (error) throw error;
}

/** active = the user currently has this reaction → delete it, else insert. */
export async function toggleReaction(
  messageId: string,
  userId: string,
  emoji: string,
  active: boolean,
): Promise<void> {
  const { error } = active
    ? await supabase
        .from('community_reactions')
        .delete()
        .eq('message_id', messageId)
        .eq('user_id', userId)
        .eq('emoji', emoji)
    : await supabase
        .from('community_reactions')
        .insert({ message_id: messageId, user_id: userId, emoji });
  if (error) throw error;
}

export async function reportMessage(
  messageId: string,
  reporterId: string,
  reason: string,
): Promise<void> {
  const { error } = await supabase
    .from('community_reports')
    .insert({ message_id: messageId, reporter_id: reporterId, reason });
  if (error) throw error;
}
