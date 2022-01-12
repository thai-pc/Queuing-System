import React from 'react';
import styles from './ButtonDevice.module.scss';

function ButtonDevice({ type, icon, handleLink }) {
  return (
    <div className={styles.add} onClick={handleLink}>
      <div className={styles.item}>
        <i className={icon}></i>
        <span>{type}</span>
      </div>
    </div>
  );
}

export default ButtonDevice;
