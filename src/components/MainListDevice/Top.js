import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Top.module.scss';

function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.status}>
        <h3>Trạng thái hoạt động</h3>
        <Dropdown />
      </div>
      <div className={styles.keyboard}>
        <h3>Trạng thái kết nối</h3>
      </div>
    </div>
  );
}

export default Top;
