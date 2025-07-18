import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import movieData from '../data/movies.json';
import { useTranslation } from 'react-i18next';

const MovieLineChart = () => {
  const { t } = useTranslation();

  const sortedData = [...movieData].sort((a, b) => a.year - b.year);

  return (
    <div>
      <h2>{t('chart2')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovieLineChart;