import { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import styles from './TopBar.module.scss';
import TitleBar from './TitleBar/TitleBar';
import Popup from './Popup/Popup';

function TopBar() {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup((prev) => !prev);
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
    <div className={styles.boxTopbar}>
      <div className={clsx(styles.container)}>
        <TitleBar primary label="Thông tin cá nhân" />
        <div className={styles.boxUser}>
          <div className={styles.info}>
            <button
              type="button"
              className={styles.notify}
              onClick={handlePopup}
            >
              <i className="fas fa-bell"></i>
            </button>
            <Popup popup={popup} setPopup={setPopup} />
            <div className={styles.boxAvatar}>
              <img src="../Image/avatar.png" alt="avatar" />
            </div>
            <div className={styles.context}>
              <p>Xin chào</p>
              <h3>Lê Quỳnh Ái Vân</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
