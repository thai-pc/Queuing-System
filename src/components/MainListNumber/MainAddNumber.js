import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { listNumberServiceAdd } from '../Dropdown/DropdownData';
import styles from './MainAddNumber.module.scss';
import Popup from '../Popup/Popup';

function MainAddNumber() {
  const [popup, setPopup] = useState(false);
  const [service, setService] = useState('Chọn dịch vụ');
  const [showservice, setShowService] = useState(false);

  const handleShowService = () => {
    setShowService((prev) => !prev);
  };
  const handleService = (e) => {
    setService(e.target.innerText);
  };
  let navigate = useNavigate();
  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/number-level/list');
  };
  const handlePopup = () => {
    setPopup(true);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && popup) {
        setPopup(false);
      }
    },
    [setPopup, popup]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <>
      <div className={styles.addNumber}>
        <div className={styles.container}>
          <h3>CẤP SỐ MỚI</h3>
          <h6>Dịch vụ khách hàng lựa chọn</h6>
          <div className={styles.item}>
            <Dropdown
              showdrop={showservice}
              value={service}
              list={listNumberServiceAdd}
              handleShow={handleShowService}
              handleValue={handleService}
              addNumber
            />
          </div>
          <div className={styles.boxButton}>
            <Button cancelBg text="Hủy bỏ" sizeDevice onClick={handleCancel} />
            <Button
              primary
              text="In số"
              sizeDevice
              onClick={service !== 'Chọn dịch vụ' ? handlePopup : null}
            />
          </div>
        </div>
      </div>
      <Popup popup={popup} value={service} setPopup={setPopup} AddNumber />
    </>
  );
}

export default MainAddNumber;
