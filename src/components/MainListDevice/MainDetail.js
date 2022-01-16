import clsx from 'clsx';
import React from 'react';
import styles from './MainDetail.module.scss';
import {
  detailDeviceBottom,
  detailDeviceLeft,
  detailDeviceRight,
} from '../Input/InputData';

function MainDetail() {
  return (
    <div className={styles.detail}>
      <div className={styles.box}>
        <h3 className={styles.title}>Thông tin thiết bị</h3>
        <div className={styles.container}>
          <div className={styles.left}>
            {detailDeviceLeft.map((item, index) => {
              return (
                <div className={clsx(styles.context, 'd-flex')} key={index}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.right}>
            {detailDeviceRight.map((item, index) => {
              return (
                <div className={clsx(styles.context, 'd-flex')} key={index}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        {detailDeviceBottom.map((item, index) => {
          return (
            <div className={styles.context} key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainDetail;
