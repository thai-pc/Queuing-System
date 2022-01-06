import styles from './Setting.module.scss';

const Setting = ({ setting, setSetting }) => {
  return (
    <>
      {setting ? (
        <ul className={styles.navbar}>
          <li className={styles.items}>
            <a href="/" className={styles.link}>
              Quản lý vai trò
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.link}>
              Quản lý tài khoản
            </a>
          </li>
          <li className={styles.items}>
            <a href="/" className={styles.link}>
              Nhật ký người dùng
            </a>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default Setting;
