import clsx from 'clsx';
import styles from './Numerical.module.scss';
import { numericalData } from './NumericalData';

function Numerical() {
  return (
    <div className={clsx(styles.box, 'd-flex')}>
      {numericalData.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={clsx(styles.top, 'd-flex')}>
              <div
                className={clsx(styles.icon, {
                  [styles.blue]: index === 0,
                  [styles.green]: index === 1,
                  [styles.orange]: index === 2,
                  [styles.pink]: index === 3,
                })}
              >
                {item.icon}
              </div>

              <div className={styles.text}>{item.text}</div>
            </div>
            <div className={clsx(styles.bottom, 'd-flex')}>
              <div className={styles.number}>{item.number}</div>
              <div
                className={clsx(styles.percent, {
                  [styles.pink1]: index === 1,
                  [styles.pink2]: index === 3,
                  [styles.orange1]: index === 0,
                  [styles.orange2]: index === 2,
                })}
              >
                {item.arrow}
                {item.percent}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Numerical;
