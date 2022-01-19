import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import { listDeviceActie, listDeviceConnect } from '../Dropdown/DropdownData';
import { search } from '../Input/InputData';
import styles from './Top.module.scss';
import clsx from 'clsx';

function Top({ listDevice, listService }) {
  const [value, setValue] = useState('');

  const [active, setActive] = useState(listDeviceActie[0].label);
  const [connect, setConnect] = useState(listDeviceConnect[0].label);

  const [showactive, setShowActive] = useState(false);
  const [showaconnect, setShowConnect] = useState(false);

  const handleShowActive = () => {
    setShowActive((prev) => !prev);
  };
  const handleShowConnect = () => {
    setShowConnect((prev) => !prev);
  };

  const handleActive = (e) => {
    setActive(e.target.innerText);
  };
  const handleConnect = (e) => {
    setConnect(e.target.innerText);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={clsx(styles.top, 'd-flex')}>
      <div className={clsx(styles.status, 'd-flex')}>
        <div className="mg-r-24">
          <h3>Trạng thái hoạt động</h3>
          <Dropdown
            showdrop={showactive}
            value={active}
            list={listDeviceActie}
            handleShow={handleShowActive}
            handleValue={handleActive}
            sizeDevice
          />
        </div>
        {listDevice ? (
          <div>
            <h3>Trạng thái kết nối</h3>
            <Dropdown
              showdrop={showaconnect}
              value={connect}
              list={listDeviceConnect}
              handleShow={handleShowConnect}
              handleValue={handleConnect}
              sizeDevice
            />
          </div>
        ) : null}
        {listService ? <DateTimePicker listService /> : null}
      </div>
      <div className={styles.keyboard}>
        <form className={styles.search}>
          {search.map((input, index) => (
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
