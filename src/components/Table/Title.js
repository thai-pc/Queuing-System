import styles from './Table.module.scss';
import { device, listService, detailService } from '../Table/TableData';

function Title({ titleListDevice, titleListService, titleDetailService }) {
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
        ? listService.map((item, index) => {
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
      {titleDetailService
        ? detailService.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>{item.id}</div>
                <div className={styles.col}>{item.active}</div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Title;
