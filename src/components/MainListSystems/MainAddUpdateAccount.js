import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './MainAddUpdateAccount.module.scss';

function MainAddUpdateAccount({ addAccount, updateAccount }) {
  const AddUpdateAccount = [
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
              {AddUpdateAccount.map((input) => {
                return (
                  <div key={input.name} className={styles.item}>
                    <Input value={input.value} {...input} AddUpdateRole />
                  </div>
                );
              })}
            </div>
            <div className={styles.right}>
              {AddUpdateAccount.map((input) => {
                return (
                  <div key={input.name} className={styles.item}>
                    <Input value={input.value} {...input} AddUpdateRole />
                  </div>
                );
              })}
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
