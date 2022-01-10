import React from 'react';
import styles from './AddDevice.module.scss';

function AddDevice() {
  return (
    <div className={styles.add}>
      <div className={styles.item}>
        <i className="fas fa-plus-square"></i>
        <span>Thêm thiết bị</span>
      </div>
    </div>
  );
}

export default AddDevice;
