import React from 'react';
import styles from './Popup.module.scss';

function Popup({ popup, setPopup }) {
  return (
    <>
      {popup ? (
        <div className={styles.Popup}>
          <h3>Thông báo</h3>
          <nav className={styles.content}>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.link}>
                <h6>Người dùng : Nguyễn Thị Thùy Dung</h6>
                <p>Thời gian nhận số : 11h30 ngày 06/01/2022</p>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export default Popup;
