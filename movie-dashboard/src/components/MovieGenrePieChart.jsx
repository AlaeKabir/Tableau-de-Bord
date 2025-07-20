import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const COLORS = ['#1e2fcbff', '#2200ffff', '#0055ffff', '#0084ffff', '#00aeffff', '#00d0ffff'];

const MovieGenrePieChart = (props) => {
  const { t } = useTranslation();

  const genreCounts = props.data.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(genreCounts).map(([genre, count]) => ({ name: genre, value: count }));

  return (
    <div className="card">
      <h2>{t('Movie Distribution by Genre')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovieGenrePieChart;