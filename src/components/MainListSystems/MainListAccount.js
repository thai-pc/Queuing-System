import React, { useState } from 'react';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import { search } from '../../components/Input/InputData';
import styles from '../../pages/Report/Report.module.scss';
import { account } from '../Dropdown/DropdownData';
import clsx from 'clsx';

function MainListAccount() {
  let navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/systems/account/add');
  };
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [typeDevice, setTypeDevice] = useState(account[0].label);

  const [showType, setShowType] = useState(false);

  const handleShowType = () => {
    setShowType((prev) => !prev);
  };

  const handleType = (e) => {
    setTypeDevice(e.target.innerText);
  };
  return (
    <div className={styles.box}>
      <h3 className={clsx(styles.accTitle, 'title')}>Danh sách tài khoản</h3>
      <div className={styles.main}>
        <div className={styles.boxDrop}>
          <label>Tên vai trò</label>
          <Dropdown
            showdrop={showType}
            value={typeDevice}
            list={account}
            handleShow={handleShowType}
            handleValue={handleType}
            account
          />
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
      <div className={styles.table}>
        <Table
          link="https://jsonblob.com/api/jsonBlob/936128030422876160"
          listAccount
        />
      </div>
      <ButtonDevice
        type="Thêm tài khoản"
        icon="fas fa-plus-square"
        listAccount
        handleLink={handleAdd}
      />
    </div>
  );
}

export default MainListAccount;
