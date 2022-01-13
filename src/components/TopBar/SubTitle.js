import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SubTitle..module.scss';
import { device } from './TopBarData';

function SubTitle({ text, path, dashboard, profile, listDevice, addDevice }) {
  return (
    <>
      {profile || dashboard ? (
        <ul className={clsx(styles.breadcrumbs)}>
          <li className={styles.breadcrumbs__item}>
            <Link
              to={path}
              className={(styles.breadcrumbs__link, styles.active)}
            >
              {text}
            </Link>
          </li>
        </ul>
      ) : null}
      {listDevice
        ? device.map((item, index) => {
            return (
              <ul key={index} className={clsx(styles.breadcrumbs)}>
                <li className={styles.breadcrumbs__item}>
                  <Link to={item.path} className={styles.breadcrumbs__link}>
                    {item.title}
                  </Link>
                </li>
                <li className={styles.breadcrumbs__item}>
                  <Link
                    to={item.path}
                    className={clsx(styles.breadcrumbs__link, {
                      [styles.active]: listDevice,
                    })}
                  >
                    {item.titleSub}
                  </Link>
                </li>
              </ul>
            );
          })
        : null}
      {addDevice
        ? device.map((item, index) => {
            return (
              <ul key={index} className={clsx(styles.breadcrumbs)}>
                <li className={styles.breadcrumbs__item}>
                  <Link to={item.path} className={styles.breadcrumbs__link}>
                    {item.title}
                  </Link>
                </li>
                <li className={styles.breadcrumbs__item}>
                  <Link to={item.path} className={styles.breadcrumbs__link}>
                    {item.titleSub}
                  </Link>
                </li>
                <li className={styles.breadcrumbs__item}>
                  <Link
                    to={item.path}
                    className={clsx(styles.breadcrumbs__link, styles.active)}
                  >
                    {item.titleSub1}
                  </Link>
                </li>
              </ul>
            );
          })
        : null}
    </>
  );
}

export default SubTitle;
