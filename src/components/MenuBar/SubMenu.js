import { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './SubMenu.module.scss';
import SubSystems from './SubSystems';

function SubMenu({ item }) {
  const [showSub, setShowsub] = useState(false);

  const pathName = window.location.pathname;

  const system =
    pathName === item.pathListRole ||
    pathName === item.pathAddRole ||
    pathName === item.pathUpdateRole ||
    pathName === item.pathListAccount ||
    pathName === item.pathAddAccount ||
    pathName === item.pathUpdateAccount ||
    pathName === item.pathDiary;

  const active =
    pathName === item.path ||
    pathName === item.pathUpdate ||
    pathName === item.pathAdd ||
    pathName === item.pathDetail ||
    system
      ? clsx(styles.items, styles.active)
      : styles.items;

  return (
    <>
      <li
        className={active}
        onClick={() => (item.openIcon ? setShowsub(!false) : null)}
      >
        <Link to={item.path} className={styles.link}>
          {item.icon}
          {item.title}
          {item.openIcon}
        </Link>
        {showSub && <SubSystems />}
      </li>
    </>
  );
}

export default SubMenu;
