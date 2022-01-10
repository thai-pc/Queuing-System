import React, { useState } from 'react';
import styles from './Container.module.scss';
import Body from './Body';
import { day, week, month } from './BodyData';
import moment from 'moment';

function Container() {
  const data = [
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
  const [value, setValue] = useState(data[0].label);
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
          <div className={styles.dropdown} onClick={handleShow}>
            {value}
            {showdrop ? (
              <ul>
                {data.map((item, index) => {
                  return (
                    <li key={index} onClick={(e) => handleValue(e)}>
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            <div className={styles.icon}>
              <i className="fas fa-caret-down"></i>
            </div>
          </div>
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
