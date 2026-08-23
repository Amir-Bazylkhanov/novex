// Точка входа приложения — самый первый файл, который запускается в браузере.
// Его задача простая: найти в index.html пустой контейнер с id="root"
// и «вмонтировать» туда всё приложение Novex (компонент App из App.tsx).
// Стили подключаются здесь же, через импорт index.css.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Находим контейнер на странице и отрисовываем в нём всё приложение.
// StrictMode — режим строгих проверок React: помогает ловить ошибки
// ещё на этапе разработки, на работу сайта для пользователей не влияет.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
