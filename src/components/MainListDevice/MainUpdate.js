import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddDevice.module.scss';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { addDeviceType } from '../../components/Dropdown/DropdownData';
import {
  updateDeviceLeft,
  updateDeviceRight,
  updateDeviceBottom,
} from '../../components/Input/InputData';

function MainAdd() {
  const [typeDevice, setTypeDevice] = useState(addDeviceType[0].label);

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
            {updateDeviceLeft.map((input) => (
              <Input
                key={input.name}
                value={input.value}
                {...input}
                updateDevice
              />
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
            {updateDeviceRight.map((input) => (
              <Input
                key={input.name}
                value={input.value}
                {...input}
                updateDevice
              />
            ))}
          </div>
        </div>
        {updateDeviceBottom.map((input) => (
          <Input key={input.name} {...input} serviceUpdate />
        ))}
        <p className={styles.note}>
          <span>*</span> Là trường thông tin bắt buộc
        </p>
      </div>
      <div className={styles.boxButton}>
        <Button
          cancelBg
          text="Hủy bỏ"
          sizeUpdateDevice
          onClick={handleCancle}
        />
        <Button primary text="Cập nhật" sizeUpdateDevice />
      </div>
    </div>
  );
}

export default MainAdd;
