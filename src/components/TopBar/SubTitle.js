import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SubTitle..module.scss';

function SubTitle({ list }) {
  const pathName = window.location.pathname;
  return (
    <ul className={clsx(styles.breadcrumbs)}>
      {list.map((item, index) => {
        return (
          <li className={styles.breadcrumbs__item} key={index}>
            <Link
              to={item.path}
              className={
                pathName === item.path
                  ? clsx(styles.breadcrumbs__link, styles.active)
                  : styles.breadcrumbs__link
              }
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SubTitle;
