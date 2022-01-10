import React from 'react';
import AddDevice from './AddDevice';
import styles from './Bottom.module.scss';
import Content from './Content';

function Bottom() {
  return (
    <div className={styles.box}>
      <Content />
      <AddDevice />
    </div>
  );
}

export default Bottom;
