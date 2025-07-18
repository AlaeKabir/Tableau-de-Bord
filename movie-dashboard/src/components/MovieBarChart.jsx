import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import movieData from '../data/movies.json';
import { useTranslation } from 'react-i18next';

const MovieBarChart = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('chart1')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={movieData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovieBarChart;