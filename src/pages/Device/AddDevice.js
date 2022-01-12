import React, { useState } from 'react';
import styles from './AddDevice.module.scss';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import { addDeviceType } from '../../components/Dropdown/DropdownData';
import { addDevice } from '../../components/Input/InputData';

function AddDevice() {
  const [typeDevice, setTypeDevice] = useState('Chọn loại thiết bị');

  const [showType, setShowType] = useState(false);

  const handleShowType = () => {
    setShowType((prev) => !prev);
  };

  const handleType = (e) => {
    setTypeDevice(e.target.innerText);
  };
  return (
    <div className={styles.addDevice}>
      <div className={styles.box}>
        <h3 className={styles.title}>Thông tin thiết bị</h3>
        <div className={styles.formMain}>
          <div className={styles.left}>
            {addDevice.map((input) => (
              <Input key={input.id} {...input} addDevice />
            ))}
          </div>
          <div className={styles.right}>
            <label>
              Loại thiết bị<span> *</span>
            </label>
            <Dropdown
              showdrop={showType}
              value={typeDevice}
              list={addDeviceType}
              handleShow={handleShowType}
              handleValue={handleType}
              addDevice
            />
            {addDevice.map((input) => (
              <Input key={input.id} {...input} addDevice />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.boxButton}></div>
    </div>
  );
}

export default AddDevice;
