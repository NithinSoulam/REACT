// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';        // Global CSS file
import App from './App.tsx';     // Make sure this file exists in src/
import { Provider } from 'react-redux';
import { store } from './store/store.ts'; // Adjust path if your store is defined in a file like store.ts

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>
);
