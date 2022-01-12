import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SubTitle..module.scss';
import { device } from './TopBarData';

function SubTitle({ text, path, dashboard, profile, listDevice }) {
  return (
    <>
      {profile || dashboard ? (
        <ul className={clsx(styles.boxTitle, 'd-flex')}>
          <li className={styles.title}>
            <Link to={path} className={(styles.link, styles.active)}>
              {text}
            </Link>
          </li>
        </ul>
      ) : null}
      {listDevice
        ? device.map((item, index) => {
            return (
              <ul key={index} className={clsx(styles.boxTitle, 'd-flex')}>
                <li className={styles.title}>
                  <span className={styles.link}>{item.title}</span>
                </li>
                {item.icon}
                <li className={styles.title}>
                  <Link to={item.path} className={(styles.link, styles.active)}>
                    {item.titleSub}
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
