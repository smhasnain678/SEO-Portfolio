import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // ✅ Tailwind css yahan import zaroor hona chahiye

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
