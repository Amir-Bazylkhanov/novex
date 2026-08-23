// Настройки сборщика Vite — инструмента, который собирает код проекта
// в файлы, понятные браузеру, и запускает сайт на компьютере разработчика.
// Здесь подключены два плагина:
//   - react() — чтобы понимать файлы React/TypeScript (.tsx);
//   - tailwindcss() — чтобы работали CSS-классы Tailwind (см. index.css).
// Порт 3000 — адрес, по которому сайт открывается при разработке:
// http://localhost:3000
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
});
