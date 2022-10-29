import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
// hash rounter is being used for dev purposes
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { LOCALES, messages } from './i18n/locales';

const locale = LOCALES.UKRAINIAN;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.UKRAINIAN}>
        <App />
      </IntlProvider>
    </Router>
  </React.StrictMode>,
);
