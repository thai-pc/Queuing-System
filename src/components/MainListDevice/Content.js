import clsx from 'clsx';
import React from 'react';
import styles from './Content.module.scss';

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={clsx(styles.rows, styles.title)}>
          <div className={styles.col}>Mã thiết bị</div>
          <div className={styles.col}>Tên thiết bị</div>
          <div className={styles.col}>Địa chỉ IP</div>
          <div className={styles.col}>Trạng thái hoạt động</div>
          <div className={styles.col}>Trạng thái kết nối</div>
          <div className={styles.col}>Dịch vụ sử dụng</div>
          <div className={styles.col}></div>
          <div className={styles.col}></div>
        </div>
        <div className={clsx(styles.rows, styles.body)}>
          <div className={styles.col}>Mã thiết bị</div>
          <div className={styles.col}>Tên thiết bị</div>
          <div className={styles.col}>Địa chỉ IP</div>
          <div className={styles.col}>Trạng thái hoạt động</div>
          <div className={styles.col}>Trạng thái kết nối</div>
          <div className={styles.col}>Dịch vụ sử dụng</div>
          <div className={styles.col}>Chi tiết</div>
          <div className={styles.col}>Cập nhật</div>
        </div>
        <div className={clsx(styles.rows, styles.body)}>
          <div className={styles.col}>Mã thiết bị</div>
          <div className={styles.col}>Tên thiết bị</div>
          <div className={styles.col}>Địa chỉ IP</div>
          <div className={styles.col}>Trạng thái hoạt động</div>
          <div className={styles.col}>Trạng thái kết nối</div>
          <div className={styles.col}>Dịch vụ sử dụng</div>
          <div className={styles.col}>Chi tiết</div>
          <div className={styles.col}>Cập nhật</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
