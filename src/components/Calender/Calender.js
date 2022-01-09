import { useState, useEffect } from 'react';
import styles from './Calender.module.scss';
import buildCalender from './buildCalender';
import dayStyles, { beforeToday } from './Styles';
import Header from './Header';
import moment from 'moment';
import clsx from 'clsx';

function Calender() {
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);

  return (
    <div className={styles.calender}>
      <Header value={value} setValue={setValue} />
      <div className={styles.body}>
        <div className={styles.dayNames}>
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d, index) => {
            return (
              <div key={index} className={styles.week}>
                {d}
              </div>
            );
          })}
        </div>
        {calender.map((week, index) => {
          return (
            <div key={index} className={styles.boxDay}>
              {week.map((day, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(styles.day, dayStyles(day, value))}
                    onClick={() => !beforeToday(day) && setValue(day)}
                  >
                    {day.format('D').toString()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calender;
