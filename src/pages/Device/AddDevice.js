import React, { useState } from 'react';
import styles from './AddDevice.module.scss';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { addDeviceType } from '../../components/Dropdown/DropdownData';
import {
  addDevice,
  addDeviceRight,
  addDeviceBottom,
} from '../../components/Input/InputData';

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
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle listDevice />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Danh sách thiết bị</h3>
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
              <Button cancel text="Hủy bỏ" sizeDevice />
              <Button primary text="Thêm thiết bị" sizeDevice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDevice;
