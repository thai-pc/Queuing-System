import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import styles from './Top.module.scss';

function Top() {
  const [value, setValue] = useState('');

  const inputs = [
    {
      name: 'search',
      type: 'text',
      placeholder: 'Nhập từ khóa',
      label: 'Từ khóa',
    },
  ];
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.top}>
      <div className={styles.status}>
        <div>
          <h3>Trạng thái hoạt động</h3>
          <Dropdown />
        </div>
        <div>
          <h3>Trạng thái kết nối</h3>
          <Dropdown />
        </div>
      </div>
      <div className={styles.keyboard}>
        <form className={styles.search}>
          {inputs.map((input, index) => (
            <Input
              key={index}
              {...input}
              value={value}
              device
              onChange={onChange}
            />
          ))}
          <button type="button" className={styles.btn}>
            <i className="far fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Top;
