import styles from './MainDetailService.module.scss';

function LeftMainDetailService() {
  return (
    <div className={styles.left}>
      <div className={styles.container}>
        <h3 className="titleMain">Thông dịch vụ</h3>
        <div className={styles.item}>
          <h3>Mã dịch vụ: </h3> <p>201</p>
        </div>
        <div className={styles.item}>
          <h3>Tên dịch vụ: </h3> <p>Khám tim mạch</p>
        </div>
        <div className={styles.item}>
          <h3>Mô tả:</h3> <p>Chuyên các bệnh lý về tim</p>
        </div>
        <div className={styles.bottom}>
          <h3 className="titleMain">Quy tắc cấp số</h3>
          <div className={styles.boxCheckbox}>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Tăng tự động từ:
              </div>
              <div className={styles.content}>
                <span className={styles.number}>0001</span>
                <span className={styles.to}>đến</span>
                <span className={styles.number}>9999</span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Prefix:
              </div>
              <div className={styles.content}>
                <span className={styles.number}>0001</span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Reset mỗi ngày
              </div>
            </div>
            <p className={styles.note}>
              <span>*</span> Là trường thông tin bắt buộc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMainDetailService;
