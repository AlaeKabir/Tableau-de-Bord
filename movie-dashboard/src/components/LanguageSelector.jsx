import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-buttons">
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
    </div>
  );
};

export default LanguageSelector;