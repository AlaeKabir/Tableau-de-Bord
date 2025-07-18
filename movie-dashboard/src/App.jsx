import React from 'react';
import './App.css';
import './i18n/i18n';
import { useTranslation } from 'react-i18next';
import MovieBarChart from './components/MovieBarChart';
import MovieLineChart from './components/MovieLineChart';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('title')}</h1>
      <LanguageSelector />
      <MovieBarChart />
      <MovieLineChart />
    </div>
  );
}

export default App;