import styles from './Table.module.scss';
import { device, service } from '../Table/TableData';

function Title({ titleListDevice, titleListService }) {
  return (
    <>
      {titleListDevice
        ? device.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>{item.code}</div>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.address}</div>
                <div className={styles.col}>{item.active}</div>
                <div className={styles.col}>{item.connect}</div>
                <div className={styles.col}>{item.service}</div>
                <div className={styles.col}></div>
                <div className={styles.col}></div>
              </div>
            );
          })
        : null}
      {titleListService
        ? service.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>{item.code}</div>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.description}</div>
                <div className={styles.col}>{item.active}</div>
                <div className={styles.col}></div>
                <div className={styles.col}></div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Title;
