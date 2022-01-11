import React from 'react';
import AddDevice from './AddDevice';
import styles from './Bottom.module.scss';
import Table from '../Table/Table';

function Bottom() {
  return (
    <div className={styles.box}>
      <Table listDevice />
      <AddDevice />
    </div>
  );
}

export default Bottom;
