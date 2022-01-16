import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddDevice.module.scss';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { addDeviceType } from '../../components/Dropdown/DropdownData';
import {
  addDevice,
  addDeviceRight,
  addDeviceBottom,
} from '../../components/Input/InputData';

function MainAdd() {
  const [typeDevice, setTypeDevice] = useState('Chọn loại thiết bị');

  const [showType, setShowType] = useState(false);

  const handleShowType = () => {
    setShowType((prev) => !prev);
  };

  const handleType = (e) => {
    setTypeDevice(e.target.innerText);
  };
  let navigate = useNavigate();
  const handleCancle = (e) => {
    e.preventDefault();
    navigate('/device/list');
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
              Loại thiết bị:<span> *</span>
            </label>
            <Dropdown
              showdrop={showType}
              value={typeDevice}
              list={addDeviceType}
              handleShow={handleShowType}
              handleValue={handleType}
              addDevice
            />
            {addDeviceRight.map((input) => (
              <Input key={input.name} {...input} addDevice />
            ))}
          </div>
        </div>
        {addDeviceBottom.map((input) => (
          <Input key={input.name} {...input} serviceAdd />
        ))}
        <p className={styles.note}>
          <span>*</span> Là trường thông tin bắt buộc
        </p>
      </div>
      <div className={styles.boxButton}>
        <Button cancel text="Hủy bỏ" sizeDevice onClick={handleCancle} />
        <Button primary text="Thêm thiết bị" sizeDevice />
      </div>
    </div>
  );
}

export default MainAdd;
