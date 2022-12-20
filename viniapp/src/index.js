import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WineProvider } from './contexts/WineContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <WineProvider>
      <App />
    </WineProvider>
  </React.StrictMode>
);