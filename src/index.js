import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Imports your global styles
import App from './App'; // Imports your main App component

// This is the starting point of your React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);