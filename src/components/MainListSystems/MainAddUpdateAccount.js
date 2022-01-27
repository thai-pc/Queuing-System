import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './MainAddUpdateAccount.module.scss';

function MainAddUpdateAccount({ addAccount, updateAccount }) {
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
            <div className={styles.left}></div>
            <div className={styles.right}></div>
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
