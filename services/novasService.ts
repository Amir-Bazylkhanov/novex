// ============================================
// Сервис внутренней валюты приложения — «Новасов».
// Ученик зарабатывает Новасы за учебные действия (начисляет сервер
// автоматически) и тратит их, например, на вопросы ИИ-тьютору.
// Здесь всего две операции: узнать баланс и списать Новасы.
// ============================================
import { supabase } from './supabaseClient.ts';

/**
 * Novas (Новасы) — the in-app virtual currency. Earning is handled by DB
 * triggers elsewhere; the client only reads the balance and spends via the
 * auth-scoped `spend_novas` RPC (it operates on auth.uid(), no user id arg).
 */

export interface SpendNovasResult {
  success: boolean;
  balance: number;
  error?: string;
}

// Узнать текущий баланс Новасов пользователя (null — если записи нет или запрос не удался).
/** Current user's Nova balance, or null when there is no row / request fails. */
export async function fetchNovaBalance(): Promise<number | null> {
  const { data, error } = await supabase.from('user_novas').select('balance').single();
  if (error || !data || typeof data.balance !== 'number') return null;
  return data.balance;
}

// Списывает Новасы за действие (например, за сообщение ИИ-тьютору).
// Сервер сам определяет, кто пользователь, — поэтому id передавать не нужно.
/**
 * Charge Novas for an action. Returns the RPC payload verbatim in typed form;
 * `error` is 'insufficient_balance' | 'no_account' | a transport message.
 */
export async function spendNovas(
  amount: number,
  actionType: string,
  description?: string,
): Promise<SpendNovasResult> {
  const { data, error } = await supabase.rpc('spend_novas', {
    p_amount: amount,
    p_action_type: actionType,
    p_description: description ?? null,
  });
  if (error) return { success: false, balance: 0, error: error.message };

  const payload: unknown = data;
  if (payload === null || typeof payload !== 'object') {
    return { success: false, balance: 0, error: 'unexpected_response' };
  }
  const result = payload as Record<string, unknown>;
  return {
    success: result.success === true,
    balance: typeof result.balance === 'number' ? result.balance : 0,
    ...(typeof result.error === 'string' ? { error: result.error } : {}),
  };
}
