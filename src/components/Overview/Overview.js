import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './Overview.module.scss';

function Overview() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <div className={styles.circle}>
          <svg>
            <circle cx="25" cy="75" r="20" />
          </svg>
        </div>
        <div className={styles.numerical}>
          <div></div>
        </div>
        <div className={styles.status}>
          <p>
            <FiberManualRecordIcon />
            Đang hoạt động<span>3.799</span>
          </p>
          <p>
            <FiberManualRecordIcon /> Ngưng hoạt động<span>422</span>
          </p>
        </div>
      </div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
    </div>
  );
}

export default Overview;
