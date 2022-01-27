import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import { listDeviceActie, role } from '../Dropdown/DropdownData';
import styles from './MainAddUpdateAccount.module.scss';
import clsx from 'clsx';

function MainAddUpdateAccount({ addAccount, updateAccount }) {
  const AddUpdateAccountLeft = [
    {
      label: 'Họ tên',
      icon: <span> *</span>,
      name: 'name',
      type: 'text',
      placeholder: addAccount ? 'Nhập họ tên' : null,
      value: updateAccount ? 'Nguyen Van A' : '',
    },
    {
      label: 'Số điện thoại',
      icon: <span> *</span>,
      name: 'phone',
      type: 'text',
      placeholder: addAccount ? 'Nhập số điện thoại' : null,
      value: updateAccount ? '0902345678' : '',
    },
    {
      label: 'Email',
      icon: <span> *</span>,
      name: 'email',
      type: 'email',
      placeholder: addAccount ? 'Nhập email' : null,
      value: updateAccount ? 'NguyenA154@gmail.com' : '',
    },
  ];

  const AddUpdateAccountRight = [
    {
      label: 'Tên đăng nhập:',
      icon: <span> *</span>,
      name: 'username',
      type: 'text',
      placeholder: addAccount ? 'Nhập tên đăng nhập' : null,
      value: updateAccount ? 'tuyetnguyen123' : '',
    },
    {
      label: 'Mật khẩu',
      icon: <span> *</span>,
      name: 'password',
      type: 'password',
      value: addAccount ? '********' : updateAccount ? 'Tuyetnguyen12' : null,
    },
    {
      label: 'Nhập lại mật khẩu',
      icon: <span> *</span>,
      name: 'confirm',
      type: 'password',
      value: addAccount ? '********' : updateAccount ? 'Tuyetnguyen12' : null,
    },
  ];

  const [typeDevice, setTypeDevice] = useState(listDeviceActie[1].label);
  const [showType, setShowType] = useState(false);

  const handleShowType = () => {
    setShowType((prev) => !prev);
  };

  const handleType = (e) => {
    setTypeDevice(e.target.innerText);
  };

  const [roles, setRole] = useState(
    addAccount ? 'Chọn vai trò' : role[2].label
  );
  const [showRole, setShowRole] = useState(false);

  const handleShowRole = () => {
    setShowRole((prev) => !prev);
  };

  const handleRole = (e) => {
    setRole(e.target.innerText);
  };
  let navigate = useNavigate();
  const handleCancle = (e) => {
    e.preventDefault();
    navigate('/systems/account/list');
  };
  return (
    <div className={styles.AddUpdateAccount}>
      <h3 className="title">Quản lý tài khoản</h3>
      <div className={styles.container}>
        <div className={styles.rows}>
          <h3 className="titleMain">Thông tin tài khoản</h3>
          <div className={styles.formMain}>
            <div className={styles.left}>
              {AddUpdateAccountLeft.map((input) => {
                return (
                  <div key={input.name} className={styles.item}>
                    <Input value={input.value} {...input} AddUpdateRole />
                  </div>
                );
              })}
              <div className={clsx(styles.item, styles.boxDrop)}>
                <label className={styles.label}>
                  Vai trò <span>*</span>
                </label>
                <Dropdown
                  showdrop={showRole}
                  value={roles}
                  list={role}
                  handleShow={handleShowRole}
                  handleValue={handleRole}
                  AddUpdateAccount
                />
              </div>
            </div>
            <div className={styles.right}>
              {AddUpdateAccountRight.map((input) => {
                return (
                  <div key={input.name} className={styles.item}>
                    <Input value={input.value} {...input} AddUpdateRole />
                  </div>
                );
              })}
              <div className={clsx(styles.item, styles.boxDrop)}>
                <label className={styles.label}>
                  Tình trạng <span>*</span>
                </label>
                <Dropdown
                  showdrop={showType}
                  value={typeDevice}
                  list={listDeviceActie}
                  handleShow={handleShowType}
                  handleValue={handleType}
                  AddUpdateAccount
                />
              </div>
            </div>
          </div>
          <p className="note">
            <span>*</span> Là trường thông tin bắt buộc
          </p>
        </div>
      </div>
      <div className={styles.boxButton}>
        <Button cancelBg text="Hủy bỏ" sizeDevice onClick={handleCancle} />
        <Button primary text="Thêm" sizeDevice />
      </div>
    </div>
  );
}

export default MainAddUpdateAccount;
