/* ============================================================================
 * NOVEX · service worker — фоновый «помощник» браузера для push-уведомлений.
 * Этот файл работает в браузере ученика/учителя даже когда вкладка с сайтом
 * закрыта: он принимает push-уведомления от сервера (например, «вышел новый
 * урок»), показывает их на экране и открывает нужную страницу Novex по клику.
 * Уведомления рассылает серверная функция supabase/functions/dispatch-notification-push.
 * Ничего, кроме уведомлений, этот файл не делает — специально, чтобы было
 * просто и надёжно.
 * ========================================================================= */
/* Novex service worker — push notifications only.
 * No caching, no offline logic, no fetch handler. Minimal by design. */

// Установка помощника: активируемся сразу, не дожидаясь закрытия вкладок.
self.addEventListener('install', () => {
  // Activate the new service worker immediately without waiting for old
  // clients to close.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of existing clients (tabs) as soon as the SW activates.
  event.waitUntil(self.clients.claim());
});

// Приём push-уведомления с сервера: достаём из него заголовок, текст
// и ссылку на страницу, а затем показываем уведомление на экране.
self.addEventListener('push', (event) => {
  let payload = { title: 'Novex', body: '', url: '/' };

  if (event.data) {
    try {
      const parsed = event.data.json();
      if (parsed && typeof parsed === 'object') {
        payload = { ...payload, ...parsed };
      }
    } catch (err) {
      // Fall back to text body if JSON parsing fails.
      try {
        payload.body = event.data.text();
      } catch (_) {
        /* ignore */
      }
    }
  }

  // A static tag lets the OS coalesce repeat notifications instead of
  // stacking duplicates if dispatch fires twice.
  const options = {
    body: payload.body,
    tag: 'novex-notification',
    data: {
      url: payload.url || '/',
    },
  };

  event.waitUntil(self.registration.showNotification(payload.title, options));
});

// Клик по уведомлению: закрываем его и открываем нужную страницу Novex.
// Если сайт уже открыт во вкладке — просто переключаемся на неё и переходим
// по ссылке, если нет — открываем новое окно.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });

      // If a window/tab is already open, focus it and navigate.
      for (const client of allClients) {
        try {
          const clientUrl = new URL(client.url);
          const targetFullUrl = new URL(targetUrl, clientUrl.origin);
          if (clientUrl.origin === targetFullUrl.origin) {
            await client.focus();
            if ('navigate' in client) {
              try {
                await client.navigate(targetFullUrl.href);
              } catch (_) {
                /* navigate() can fail cross-origin-ish; ignore */
              }
            }
            return;
          }
        } catch (_) {
          /* ignore malformed URL */
        }
      }

      // Otherwise open a new window.
      if (self.clients.openWindow) {
        await self.clients.openWindow(targetUrl);
      }
    })()
  );
});
