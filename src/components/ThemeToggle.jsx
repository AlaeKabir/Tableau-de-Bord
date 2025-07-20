import React from 'react';

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="select-wrapper">
      <button className="styled-select" onClick={toggleTheme}>
        {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;