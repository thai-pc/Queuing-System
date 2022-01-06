import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubMenu.module.scss';

function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = (e) => {
    e.preventDefault();
    setSubnav(!subnav);
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && subnav) {
        setSubnav(false);
      }
    },
    [setSubnav, subnav]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <>
      <li className={styles.items}>
        <Link
          to={item.path}
          className={styles.link}
          onClick={item.subNav && showSubnav}
        >
          {item.icon}
          {item.title}
          {item.openIcon}
        </Link>
        {item.subNav && subnav ? (
          <ul className={styles.navbar}>
            {item.subNav.map((item, index) => {
              return (
                <li className={styles.items} key={index}>
                  <Link to={item.path} className={styles.link}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </li>
    </>
  );
}

export default SubMenu;
