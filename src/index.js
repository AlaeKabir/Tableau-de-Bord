import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // ← NOTE le .jsx ici
import './i18n/i18n';        // ← ajoute ceci aussi si manquant

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);