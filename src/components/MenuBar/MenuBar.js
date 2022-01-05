import React from 'react';
import styles from './MenuBar.module.scss';
function MenuBar() {
  return (
    <div className={styles.boxMenu}>
      <div className={styles.brand}>
        <img src="../Image/logo_dark.jpg" alt="logo" />
      </div>
      <ul className={styles.navbar}>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <i className="fal fa-clipboard"></i>Dashboard
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <i className="far fa-tv"></i>Thiết bị
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <i className="fal fa-comments"></i>Dịch vụ
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <i className="far fa-layer-group"></i>Cấp số
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <i className="far fa-file-chart-line"></i>Báo cáo
          </a>
        </li>
        <li className={styles.items}>
          <a href="/" className={styles.link}>
            <i className="far fa-cog"></i>Cài đặt hệ thống
            <i className="far fa-ellipsis-v"></i>
          </a>
        </li>
      </ul>
      <div className={styles.box}>
        <button type="button" className={styles.logout}>
          <i className="far fa-sign-out"></i> Đăng xuất
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
