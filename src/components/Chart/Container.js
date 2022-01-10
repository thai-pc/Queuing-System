import React, { useState } from 'react';
import styles from './Container.module.scss';
import Body from './Body';
import { day, week, month } from './BodyData';
import moment from 'moment';
import Dropdown from '../Dropdown/Dropdown';

function Container() {
  const chart = [
    {
      label: 'Ngày',
    },
    {
      label: 'Tuần',
    },
    {
      label: 'Tháng',
    },
  ];
  const [value, setValue] = useState(chart[0].label);
  const [showdrop, setShowdrop] = useState(false);
  const date = moment();

  const handleShow = () => {
    setShowdrop((prev) => !prev);
  };

  const handleValue = (e) => {
    setValue(e.target.innerText);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <h5>
            Bảng thống kê theo
            {value === 'Ngày'
              ? ' ngày'
              : value === 'Tuần'
              ? ' tuần'
              : value === 'Tháng'
              ? ' tháng'
              : null}
          </h5>
          <p>
            {value === 'Ngày' || value === 'Tuần'
              ? 'Tháng ' + date.format('MM/YYYY')
              : value === 'Tháng'
              ? 'Năm ' + date.format('YYYY')
              : null}
          </p>
        </div>
        <div className={styles.box}>
          <span>Xem thêm</span>
          <Dropdown
            showdrop={showdrop}
            value={value}
            handleShow={handleShow}
            handleValue={handleValue}
            chart={chart}
            sizeDashboard
          />
        </div>
      </div>
      {value === 'Ngày' ? (
        <Body day={day} />
      ) : value === 'Tuần' ? (
        <Body week={week} />
      ) : value === 'Tháng' ? (
        <Body month={month} />
      ) : null}
    </>
  );
}

export default Container;
