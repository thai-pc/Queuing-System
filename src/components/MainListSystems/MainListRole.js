import React, { useState } from 'react';
import Input from '../Input/Input';
import { search } from '../Input/InputData';
import Table from '../Table/Table';
import styles from './MainListRole.module.scss';

function MainListRole() {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.role}>
      <div className={styles.top}>
        <h3 className={styles.text}>Danh sách vai trò</h3>
        <div className={styles.keyboard}>
          <form className={styles.search}>
            {search.map((input, index) => (
              <Input
                key={index}
                {...input}
                value={value}
                listNumber
                onChange={onChange}
              />
            ))}
            <button type="button" className={styles.btn}>
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.table}>
        <Table
          link="https://jsonblob.com/api/jsonBlob/935079947165515776"
          listRole
        />
      </div>
    </div>
  );
}

export default MainListRole;
