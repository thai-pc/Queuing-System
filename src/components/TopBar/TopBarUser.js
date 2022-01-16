import { useState, useEffect, useCallback } from 'react';
import Popup from './Popup/Popup';
import clsx from 'clsx';
import styles from './TopBarUser.module.scss';

function TopBarUser() {
  const [popup, setPopup] = useState(false);
  const [bell, setBell] = useState(false);

  const handlePopup = () => {
    setPopup((prev) => !prev);
    setBell((prev) => !prev);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && popup) {
        setPopup(false);
        setBell(false);
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
    <div className={styles.boxUser}>
      <div className={styles.info}>
        <button
          type="button"
          className={clsx(styles.notify, { [styles.secondary]: bell })}
          onClick={handlePopup}
        >
          <i className="fas fa-bell"></i>
        </button>
        <Popup popup={popup} setPopup={setPopup} />
        <div className={styles.boxAvatar}>
          <img src="../../avatar.png" alt="avatar" />
        </div>
        <div className={styles.context}>
          <p>Xin chào</p>
          <h3>Lê Quỳnh Ái Vân</h3>
        </div>
      </div>
    </div>
  );
}

export default TopBarUser;
