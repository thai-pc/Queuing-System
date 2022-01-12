import styles from './Table.module.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ReadMore } from './ReadMore';
import clsx from 'clsx';

function Items({ currentItem }) {
  return (
    <>
      {currentItem.map((item) => {
        return (
          <div className={styles.rows} key={item.id}>
            <div className={styles.col}>
              {item.code} {item.id}
            </div>
            <div className={styles.col}>{item.name}</div>
            <div className={styles.col}>{item.address}</div>
            <div
              className={clsx(styles.col, {
                [styles.red]: item.active === 'Ngưng hoạt động',
                [styles.green]: item.active === 'Hoạt động',
              })}
            >
              <FiberManualRecordIcon />
              {item.active}
            </div>
            <div
              className={clsx(styles.col, {
                [styles.red]: item.connect === 'Mất kết nối',
                [styles.green]: item.connect === 'Kết nối',
              })}
            >
              <FiberManualRecordIcon />
              {item.connect}
            </div>
            <div className={styles.col}>
              <ReadMore>{item.service}</ReadMore>
            </div>
            <div className={styles.col}>
              <span className={styles.details}>Chi tiết</span>
            </div>
            <div className={styles.col}>
              <span className={styles.update}>Cập nhật</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Items;
