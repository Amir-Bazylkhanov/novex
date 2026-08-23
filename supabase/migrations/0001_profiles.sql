-- ============================================================================
-- NOVEX · миграция 0001 · таблица профилей пользователей (public.profiles).
-- Этот файл — инструкция для базы данных Supabase: он создаёт таблицу,
-- в которой хранится карточка каждого пользователя (имя, роль — ученик,
-- учитель или админ, класс, предметы, цель обучения, язык интерфейса).
-- Также здесь настроены правила безопасности: человек видит и меняет
-- только свою карточку, и автоматика, которая создаёт карточку
-- при регистрации нового пользователя.
-- ============================================================================
--
-- ============================================================================
-- novex · migration 0001 · public.profiles
-- one profile row per auth user, protected by row level security.
-- review carefully before applying to the live database.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- table: public.profiles
-- keyed by auth.users.id; one row per user.
-- ----------------------------------------------------------------------------
-- По-русски: создаём таблицу «профили». Одна строка = один пользователь.
-- Поля: имя, роль (ученик / учитель / админ), класс (7–12), список предметов,
-- цель обучения (ЕНТ, олимпиада, повторение, поступление), язык интерфейса
-- (ru / kk / en), школа, регион и служебные даты создания/изменения.
create table if not exists public.profiles (
  id          uuid        primary key references auth.users (id) on delete cascade,
  full_name   text,
  role        text        not null default 'student'
                          check (role in ('student', 'teacher', 'admin')),
  grade       smallint    check (grade between 7 and 12),
  subjects    text[]      not null default '{}',
  goal        text        check (goal in ('ent', 'olympiad', 'revision', 'admission')),
  language    text        not null default 'ru'
                          check (language in ('ru', 'kk', 'en')),
  school      text,
  region      text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- row level security (security-critical)
-- a user may only ever see / create / modify their own row. no deletes:
-- profiles are removed only via the cascade from auth.users.
-- note: (select auth.uid()) is wrapped in a subselect on purpose so the call
-- is evaluated once per statement instead of once per row (rls initplan).
-- ----------------------------------------------------------------------------
-- По-русски: включаем защиту на уровне строк. Каждый вошедший пользователь
-- может читать, создавать и менять только СВОЮ карточку — чужие профили
-- ему недоступны. Удалять карточки вручную нельзя: они удаляются
-- автоматически вместе с аккаунтом.
alter table public.profiles enable row level security;

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
  for select to authenticated
  using ((select auth.uid()) = id);

drop policy if exists profiles_insert_own on public.profiles;
create policy profiles_insert_own on public.profiles
  for insert to authenticated
  with check ((select auth.uid()) = id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- ----------------------------------------------------------------------------
-- trigger: create a profile row for every new auth user.
-- security definer so it can write past rls; search_path is pinned to ''
-- so every identifier below is fully schema-qualified (no hijackable lookups).
-- ----------------------------------------------------------------------------
-- По-русски: автоматика регистрации. Как только человек создаёт аккаунт,
-- база сама заводит ему пустую карточку профиля (с именем, если оно было
-- указано при регистрации). Писать отдельный код в приложении не нужно.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- ----------------------------------------------------------------------------
-- trigger: keep updated_at fresh on every update.
-- ----------------------------------------------------------------------------
-- По-русски: при любом изменении карточки автоматически обновляем поле
-- updated_at — так всегда видно, когда профиль менялся в последний раз.
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row
  execute function public.touch_updated_at();

-- ----------------------------------------------------------------------------
-- no extra indexes: id is the primary key, and its index already serves the
-- rls lookups above.
-- ----------------------------------------------------------------------------

-- ============================================================================
-- follow-up (already applied to production, recorded here for parity):
-- revoke public execute on the trigger functions.
--
-- handle_new_user() and touch_updated_at() are trigger-only functions and are
-- never meant to be called directly, but by default supabase grants execute
-- to everyone, which exposes them over the api at /rest/v1/rpc — the supabase
-- security advisor flagged both. revoke closes that surface; triggers do not
-- need execute granted to any role to fire.
-- ============================================================================
-- По-русски: закрываем прямой вызов этих служебных функций извне — они нужны
-- только самой базе для автоматики, а не пользователям приложения.
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.touch_updated_at() from public, anon, authenticated;
