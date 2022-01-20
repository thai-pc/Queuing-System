import clsx from 'clsx';
import React from 'react';
import styles from './DropdownTable.module.scss';

function DropdownTable({ list, scroll, service }) {
  return (
    <ul
      className={clsx(styles.subDropdown, {
        [styles.scroll]: scroll,
        [styles.service]: service,
      })}
    >
      {list.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            {item.label}
            {service ? <input type="checkbox" /> : null}
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownTable;
