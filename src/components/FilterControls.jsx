import React from 'react';
import { useTranslation } from 'react-i18next';

const FilterControls = ({ genres, selectedGenre, onGenreChange, yearRange, onYearRangeChange }) => {
  const { t } = useTranslation();

  return (
    <div className="filter-controls">
      <label>
        {t('filterGenre')}:
        <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
          <option value="">{t('all')}</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <label>
        {t('filterYear')}:
        <input
          type="range"
          min="1970"
          max="2025"
          value={yearRange}
          onChange={(e) => onYearRangeChange(e.target.value)}
        />
        <span>{yearRange}</span>
      </label>
    </div>
  );
};

export default FilterControls;