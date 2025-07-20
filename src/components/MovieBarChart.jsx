import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const MovieBarChart = (props) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <h2>{t('chart1')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={props.data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#00bcd4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovieBarChart;