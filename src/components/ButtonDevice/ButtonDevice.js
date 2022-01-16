import clsx from 'clsx';
import React from 'react';
import styles from './ButtonDevice.module.scss';

function ButtonDevice({ type, icon, handleLink, detail, device }) {
  return (
    <div
      className={clsx(styles.add, {
        [styles.detail]: detail,
        [styles.device]: device,
      })}
      onClick={handleLink}
    >
      <div className={styles.item}>
        <i className={icon}></i>
        <span>{type}</span>
      </div>
    </div>
  );
}

export default ButtonDevice;
