import styles from './MainDetailService.module.scss';

function MainDetailService() {
  return (
    <div className={styles.detail}>
      <div className={styles.left}>
        <div className={styles.container}>
          <h3 className="titleMain">Thông dịch vụ</h3>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.container}></div>
      </div>
    </div>
  );
}

export default MainDetailService;
