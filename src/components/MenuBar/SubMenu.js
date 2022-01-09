import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './SubMenu.module.scss';

function SubMenu({ item }) {
  return (
    <>
      <li
        className={
          window.location.pathname === item.path
            ? clsx(styles.items, styles.active)
            : styles.items
        }
      >
        <Link to={item.path} className={styles.link}>
          {item.icon}
          {item.title}
          {item.openIcon}
        </Link>
      </li>
    </>
  );
}

export default SubMenu;
