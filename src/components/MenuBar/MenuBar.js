import clsx from 'clsx';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MenuBar.module.scss';
import Setting from './Setting/Setting';

function MenuBar() {
  const [setting, setSetting] = useState(false);

  let navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const openSetting = (e) => {
    e.preventDefault();
    setSetting((prev) => !prev);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && setting) {
        setSetting(false);
      }
    },
    [setSetting, setting]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <div className={styles.boxMenu}>
      <div className={styles.brand}>
        <img src="../Image/logo_dark.jpg" alt="logo" />
      </div>
      <ul className={styles.navbar}>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <div>
              <i class="far fa-tachometer-slowest"></i>
            </div>
            Dashboard
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <div>
              <i className="far fa-tv"></i>
            </div>
            Thiết bị
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <div>
              <i className="fal fa-comments"></i>
            </div>
            Dịch vụ
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <div>
              <i className="far fa-layer-group"></i>
            </div>
            Cấp số
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <div>
              <i className="far fa-file-chart-line"></i>
            </div>
            Báo cáo
          </a>
        </li>
        <li className={clsx(styles.items, styles.setting)}>
          <a href="/" className={styles.link} onClick={openSetting}>
            <div>
              <i className="far fa-cog"></i>
            </div>
            Cài đặt hệ thống
            <i className="far fa-ellipsis-v"></i>
          </a>
          <Setting setting={setting} setSetting={setSetting} />
        </li>
      </ul>
      <div className={styles.box}>
        <button type="button" className={styles.logout} onClick={onLogout}>
          <i className="far fa-sign-out"></i> Đăng xuất
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
