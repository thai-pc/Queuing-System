import React from 'react';
import { PopupData } from './PopupData';
import styles from './Popup.module.scss';
import CloseIcon from '@mui/icons-material/Close';

function Popup({ popup, setPopup, TopBar, AddNumber, value }) {
  return (
    <>
      {TopBar && popup ? (
        <div className={styles.Popup}>
          <h3>Thông báo</h3>
          <nav className={styles.content}>
            {PopupData.map((item, index) => {
              return (
                <div className={styles.items} key={index}>
                  <div className={styles.link}>
                    <h6>{item.title}</h6>
                    <p>{item.time}</p>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      ) : null}
      {AddNumber && popup ? (
        <div className={styles.background}>
          <div className={styles.PopupNumber}>
            <h4 className={styles.title}>Số thứ tự được cấp</h4>
            <p className={styles.number}>2001201</p>
            <p className={styles.content}>
              DV: {value} <span>(tại quầy số 1)</span>
            </p>
            <div className={styles.boxTime}>
              <p>
                Thời gian cấp: <span>09:30 11/10/2021</span>
              </p>
              <p>
                Hạn sử dụng: <span>17:30 11/10/2021</span>
              </p>
            </div>
            <span className={styles.close} onClick={() => setPopup(false)}>
              <CloseIcon />
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Popup;
