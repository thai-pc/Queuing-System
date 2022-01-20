import clsx from 'clsx';
import React from 'react';
import styles from './ButtonDevice.module.scss';

function ButtonDevice({
  type,
  icon,
  type1,
  icon1,
  handleLink,
  handleCancel,
  detail,
  device,
  service,
  detailNumber,
  report,
}) {
  return (
    <div
      className={clsx(styles.add, {
        [styles.detail]: detail,
        [styles.device]: device,
        [styles.service]: service,
        [styles.detailNumber]: detailNumber,
        [styles.report]: report,
      })}
    >
      <div className={styles.item} onClick={handleLink}>
        <i className={icon}></i>
        <span>{type}</span>
      </div>
      {service ? (
        <>
          <div className={styles.line}></div>
          <div className={styles.item} onClick={handleCancel}>
            <i className={icon1}></i>
            <span>{type1}</span>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ButtonDevice;
