import { useNavigate } from 'react-router-dom';
import styles from './MenuBar.module.scss';
import LogoutIcon from '@mui/icons-material/Logout';
import SubMenu from './SubMenu';
import { MenuBarData } from './MenuBarData';

function MenuBar() {
  let navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className={styles.boxMenu}>
      <div className={styles.brand}>
        <img src="../../logo.svg" alt="logo" />
      </div>
      <ul className={styles.navbar}>
        {MenuBarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </ul>
      <div className={styles.box}>
        <button type="button" className={styles.logout} onClick={onLogout}>
          <LogoutIcon />
          Đăng xuất
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
