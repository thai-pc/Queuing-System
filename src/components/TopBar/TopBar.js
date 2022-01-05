import clsx from 'clsx';
import TitleBar from './TitleBar/TitleBar';
import styles from './TopBar.module.scss';

function TopBar() {
  return (
    <div className={styles.boxTopbar}>
      <div className={clsx(styles.container)}>
        <TitleBar primary label="Thông tin cá nhân" />
        <div className={styles.boxUser}>
          <div className={styles.info}>
            <button type="button" className={styles.notify}>
              <i className="fad fa-bell"></i>
            </button>
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
