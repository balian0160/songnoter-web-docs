// src/components/LanguageSwitcher.js

import React from 'react';
import { useHistory } from '@docusaurus/router';
import { useTranslation } from '@docusaurus/useTranslation';

const LanguageSwitcher = () => {
  const history = useHistory();
  const { currentLocale, locales } = useTranslation();

  const handleLanguageChange = (locale) => {
    const { pathname, search } = window.location;
    const newPath = `/${locale}${pathname.slice(3)}`; // Adjust for your routing structure
    history.push(newPath + search);
  };

  return (
    <div>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={currentLocale}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;