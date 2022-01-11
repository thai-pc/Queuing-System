import React from 'react';
import AddDevice from './AddDevice';
import styles from './Bottom.module.scss';
import Table from '../Table/Table';
import { device } from '../Table/TableData';

function Bottom() {
  return (
    <div className={styles.box}>
      <Table listDevice title={device} />
      <AddDevice />
    </div>
  );
}

export default Bottom;
