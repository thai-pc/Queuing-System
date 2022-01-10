import React from 'react';
import styles from './Dropdown.module.scss';
import clsx from 'clsx';
function Dropdown({
  chart,
  sizeDashboard,
  value,
  showdrop,
  handleShow,
  handleValue,
}) {
  return (
    <>
      {chart && sizeDashboard ? (
        <div
          className={clsx(styles.dropdown, styles.chart)}
          onClick={handleShow}
        >
          {value}
          {showdrop ? (
            <ul>
              {chart.map((item, index) => {
                return (
                  <li key={index} onClick={handleValue}>
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
      ) : null}
    </>
  );
}

export default Dropdown;
