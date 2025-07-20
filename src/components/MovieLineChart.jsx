import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const MovieLineChart = (props) => {
  const { t } = useTranslation();

  const sortedData = [...props.data].sort((a, b) => a.year - b.year);

  return (
    <div className="card">
      <h2>{t('chart2')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line type="monotone" dataKey="rating" stroke="#00bcd4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovieLineChart;