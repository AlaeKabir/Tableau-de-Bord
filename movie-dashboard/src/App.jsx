import React, { useState, useEffect } from 'react';
import './App.css';
import './i18n/i18n';
import { useTranslation } from 'react-i18next';
import MovieBarChart from './components/MovieBarChart';
import MovieGenrePieChart from './components/MovieGenrePieChart';
import MovieScatterPlot from './components/MovieScatterPlot';
import MovieLineChart from './components/MovieLineChart';
import LanguageSelector from './components/LanguageSelector';
import ThemeToggle from './components/ThemeToggle';
import movieData from './data/movies.json';

function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [yearRange, setYearRange] = useState(2025);
  const [filteredData, setFilteredData] = useState(movieData);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = movieData.filter((movie) => {
      const matchGenre = selectedGenre ? movie.genre === selectedGenre : true;
      const matchYear = movie.year <= parseInt(yearRange);
      return matchGenre && matchYear;
    });
    setFilteredData(filtered);
  }, [selectedGenre, yearRange]);

  const genres = Array.from(new Set(movieData.map((movie) => movie.genre)));

  const resetFilters = () => {
    setSelectedGenre('');
    setYearRange(2025);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>{t('loading') || 'Loading Dashboard...'}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="header-flex">
        <div className="header-left">
          <img src="/logo.png" alt="Dashboard Logo" className="header-logo" />
          <h1>{t('title')}</h1>
        </div>
        <div className="header-controls">
          <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
          <LanguageSelector />
        </div>
      </header>

      <section className="filter-panel">
        <div className="filter-group">
          <label htmlFor="genre-select">🎬 {t('filterGenre')}:</label>
          <select
            id="genre-select"
            className="styled-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">{t('all')}</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="year-range">📅 {t('filterYear')}: {yearRange}</label>
          <input
            id="year-range"
            type="range"
            min="1970"
            max="2025"
            step="1"
            value={yearRange}
            onChange={(e) => setYearRange(e.target.value)}
            className="styled-range"
          />
        </div>
        <div className="filter-group">
          <button className="styled-select" onClick={resetFilters}>{t('resetFilters') || 'Reset Filters'}</button>
        </div>
      </section>

      <main>
        <div className="grid-container">
          <MovieBarChart data={filteredData} />
          <MovieLineChart data={filteredData} />
          <MovieGenrePieChart data={filteredData} />
          <MovieScatterPlot data={filteredData} connectDots={true} />
        </div>
      </main>
    </div>
  );
}

export default App;