import React from 'react';
import styles from './MainAddService.module.scss';

function Bottom() {
  return (
    <div className={styles.bottom}>
      <h3 className="titleMain">Quy tắc cấp số</h3>
      <div className={styles.boxCheckbox}>
        <div className={styles.item}>
          <div className={styles.group}>
            <input type="checkbox" />
            Tăng tự động từ:
          </div>
          <div className={styles.content}>
            <span className={styles.number}>0001</span>
            <span className={styles.to}>đến</span>
            <span className={styles.number}>9999</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.group}>
            <input type="checkbox" />
            Prefix:
          </div>
          <div className={styles.content}>
            <span className={styles.number}>0001</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.group}>
            <input type="checkbox" />
            Surfix:
          </div>
          <div className={styles.content}>
            <span className={styles.number}>0001</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.group}>
            <input type="checkbox" />
            Reset mỗi ngày
          </div>
        </div>
      </div>
      <p className={styles.note}>
        <span>*</span> Là trường thông tin bắt buộc
      </p>
    </div>
  );
}

export default Bottom;
