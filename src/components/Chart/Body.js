import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import styles from './Body.module.scss';

function Body({ day, week, month }) {
  return (
    <div className={styles.body}>
      <AreaChart
        width={743}
        height={375}
        data={day ? day : week ? week : month ? month : null}
        syncId="anyId"
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sl"
          stroke="#5185F7"
          fill="#5185F7"
          strokeWidth="3"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </div>
  );
}

export default Body;
