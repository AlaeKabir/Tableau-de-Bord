import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const MovieScatterPlot = (props) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <h2>{t('Revenue vs Rating')}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis dataKey="revenue" name="Revenue" unit="M$" />
          <YAxis dataKey="rating" name="Rating" domain={[0, 10]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Movies" data={props.data} fill="#00bcd4" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovieScatterPlot;