import React from 'react';
import { PopupData } from './PopupData';
import styles from './Popup.module.scss';

function Popup({ popup, setPopup }) {
  return (
    <>
      {popup ? (
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
    </>
  );
}

export default Popup;
