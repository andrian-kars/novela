import React from 'react';
import { createRoot } from 'react-dom/client';
// hash rounter is being used for dev purposes
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
