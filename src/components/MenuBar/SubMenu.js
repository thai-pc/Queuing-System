import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './SubMenu.module.scss';

function SubMenu({ item }) {
  const pathName = window.location.pathname;
  const active =
    pathName === item.path ||
    pathName === item.pathUpdate ||
    pathName === item.pathAdd
      ? clsx(styles.items, styles.active)
      : styles.items;

  return (
    <>
      <li className={active}>
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
