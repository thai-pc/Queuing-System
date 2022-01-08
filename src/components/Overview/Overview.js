import clsx from 'clsx';
import styles from './Overview.module.scss';
import { OverviewData } from './OverviewData';

function Overview() {
  return (
    <div className={styles.box}>
      {OverviewData.map((item, index) => {
        return (
          <div
            className={clsx(styles.item, 'd-flex', {
              [styles.orange]: index === 0,
              [styles.blue]: index === 1,
              [styles.green]: index === 2,
            })}
            key={index}
          >
            <div className={styles.circle}>
              <svg className={styles.fisrt}>
                <circle cx="30" cy="30" r="30" />
                <circle cx="30" cy="30" r="30" />
              </svg>
              <svg className={styles.second}>
                <circle cx="25" cy="25" r="25" />
                <circle cx="25" cy="25" r="25" />
              </svg>
              {index === 2 ? (
                <svg className={styles.third}>
                  <circle cx="20" cy="20" r="20" />
                  <circle cx="20" cy="20" r="20" />
                </svg>
              ) : null}

              <span className={styles.progress}>{item.precent}</span>
            </div>
            <div className={styles.numerical}>
              <div className={styles.number}>{item.number}</div>
              <div className={styles.icon}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            </div>
            <div className={styles.status}>
              <div className={clsx(styles.content, styles.active, 'd-flex')}>
                {item.dots}
                {item.active}
                <div className={styles.number}>{item.number1}</div>
              </div>
              <div className={clsx(styles.content, 'd-flex')}>
                {item.dots}
                {item.stop}
                <div className={styles.number}>{item.number2}</div>
              </div>
              {index === 2 ? (
                <div className={clsx(styles.content, styles.skip, 'd-flex')}>
                  {item.dots}
                  {item.skip}
                  <div className={styles.number}>{item.number3}</div>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
