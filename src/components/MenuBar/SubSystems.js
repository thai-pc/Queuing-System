import { Link } from 'react-router-dom';
import styles from './SubSystems.module.scss';

function SubSystems() {
  const subNav = [
    {
      title: 'Quản lý vai trò',
      path: '/systems/role/list',
    },
    {
      title: 'Quản lý tài khoản',
      path: '/systems/account/list',
    },
    {
      title: 'Nhật ký người dùng',
      path: '/systems/diary/list',
    },
  ];
  return (
    <>
      {subNav ? (
        <ul className={styles.navbar}>
          {subNav.map((item, index) => {
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
    </>
  );
}

export default SubSystems;
