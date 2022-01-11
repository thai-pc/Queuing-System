import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Table({ listDevice }) {
  return (
    <div className={styles.content}>
      <div
        className={clsx(styles.container, { [styles.listDevice]: listDevice })}
      >
        <div className={styles.title}>
          <div className={styles.rows}>
            <div className={styles.col}>Mã thiết bị</div>
            <div className={styles.col}>Tên thiết bị</div>
            <div className={styles.col}>Địa chỉ IP</div>
            <div className={styles.col}>Trạng thái hoạt động</div>
            <div className={styles.col}>Trạng thái kết nối</div>
            <div className={styles.col}>Dịch vụ sử dụng</div>
            <div className={styles.col}></div>
            <div className={styles.col}></div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.rows}>
            <div className={styles.col}>KIO_01</div>
            <div className={styles.col}>Kiosk</div>
            <div className={styles.col}>192.168.1.10</div>
            <div className={styles.col}>
              <FiberManualRecordIcon />
              Ngưng hoạt động
            </div>
            <div className={styles.col}>
              <FiberManualRecordIcon />
              Mất kết nối
            </div>
            <div className={styles.col}>
              <p>Khám tim mạch, Khám mắt...</p>
              <span className={styles.viewmore}>Xem thêm</span>
            </div>
            <div className={styles.col}>
              <span className={styles.details}>Chi tiết</span>
            </div>
            <div className={styles.col}>
              <span className={styles.update}>Cập nhật</span>
            </div>
          </div>
          <div className={styles.rows}>
            <div className={styles.col}>KIO_01</div>
            <div className={styles.col}>Kiosk</div>
            <div className={styles.col}>192.168.1.10</div>
            <div className={styles.col}>
              <FiberManualRecordIcon />
              Ngưng hoạt động
            </div>
            <div className={styles.col}>
              <FiberManualRecordIcon />
              Mất kết nối
            </div>
            <div className={styles.col}>
              <p>Khám tim mạch, Khám mắt...</p>
              <span className={styles.viewmore}>Xem thêm</span>
            </div>
            <div className={styles.col}>
              <span className={styles.details}>Chi tiết</span>
            </div>
            <div className={styles.col}>
              <span className={styles.update}>Cập nhật</span>
            </div>
          </div>
          <div className={styles.rows}>
            <div className={styles.col}>KIO_01</div>
            <div className={styles.col}>Kiosk</div>
            <div className={styles.col}>192.168.1.10</div>
            <div className={styles.col}>
              <FiberManualRecordIcon />
              Ngưng hoạt động
            </div>
            <div className={styles.col}>
              <FiberManualRecordIcon />
              Mất kết nối
            </div>
            <div className={styles.col}>
              <p>Khám tim mạch, Khám mắt...</p>
              <span className={styles.viewmore}>Xem thêm</span>
            </div>
            <div className={styles.col}>
              <span className={styles.details}>Chi tiết</span>
            </div>
            <div className={styles.col}>
              <span className={styles.update}>Cập nhật</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
