import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SubTitle..module.scss';

function SubTitle({ profile, dashboard, device, service }) {
  return (
    <ul className={clsx(styles.boxTitle, 'd-flex')}>
      {profile ? (
        <li className={styles.title}>
          <Link to={profile.path} className={(styles.link, styles.active)}>
            {profile.title}
          </Link>
        </li>
      ) : null}
      {dashboard ? (
        <li className={styles.title}>
          <Link
            to={dashboard.path}
            className={
              window.location.pathname === dashboard.path
                ? clsx(styles.link, styles.active)
                : styles.link
            }
          >
            {dashboard.title}
          </Link>
        </li>
      ) : null}
      {device ? (
        <>
          <li className={styles.title}>
            <Link to={device.path} className={styles.link}>
              {device.title}
            </Link>
          </li>
          {device.icon}
          <li className={styles.title}>
            <Link
              to={device.path}
              className={
                window.location.pathname === device.path
                  ? clsx(styles.link, styles.active)
                  : styles.link
              }
            >
              {device.titleSub}
            </Link>
          </li>
        </>
      ) : null}
      {service ? (
        <>
          <li className={styles.title}>
            <Link to={service.path} className={styles.link}>
              {service.title}
            </Link>
          </li>
          {service.icon}
          <li className={styles.title}>
            <Link
              to={service.path}
              className={
                window.location.pathname === service.path
                  ? clsx(styles.link, styles.active)
                  : styles.link
              }
            >
              {service.titleSub}
            </Link>
          </li>
        </>
      ) : null}
    </ul>
  );
}

export default SubTitle;
