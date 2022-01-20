import clsx from 'clsx';
import React from 'react';
import styles from '../MainListDevice/MainDetail.module.scss';
import { detailNumberLeft, detailNumberRight } from '../Input/InputData';

function MainDetailNumber() {
  return (
    <div className={styles.detail}>
      <div className={styles.box}>
        <h3 className={styles.title}>Thông tin cấp số</h3>
        <div className={styles.container}>
          <div className={styles.left}>
            {detailNumberLeft.map((item, index) => {
              return (
                <div className={clsx(styles.context, 'd-flex')} key={index}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.right}>
            {detailNumberRight.map((item, index) => {
              return (
                <div className={clsx(styles.context, 'd-flex')} key={index}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p
                    className={clsx(styles.text, {
                      [styles.blue]: item.text === 'Đang chờ',
                    })}
                  >
                    {item.icon}
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDetailNumber;
