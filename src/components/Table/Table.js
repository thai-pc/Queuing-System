import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ReadMore } from './ReadMore';
import Pagination from '../Pagination/Pagination';

function Table({ listDevice, title }) {
  fetch('https://jsonblob.com/api/jsonBlob/930461141252194304')
    .then((response) => response.json())
    .then((json) => console.log(json.device));

  return (
    <>
      <div className={styles.content}>
        <div
          className={clsx(styles.container, {
            [styles.listDevice]: listDevice,
          })}
        >
          <div className={styles.title}>
            {title
              ? title.map((item, index) => {
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
          </div>
          <div className={styles.body}>
            <div className={styles.rows}>
              <div className={styles.col}>KIO_01</div>
              <div className={styles.col}>Kiosk</div>
              <div className={styles.col}>192.168.1.10</div>
              <div className={clsx(styles.col, styles.blue)}>
                <FiberManualRecordIcon />
                Ngưng hoạt động
              </div>
              <div className={clsx(styles.col, styles.green)}>
                <FiberManualRecordIcon />
                Kết nối
              </div>
              <div className={styles.col}>
                <ReadMore>
                  Khám tim mạch, Khám mắt, Khám tai mũi họng, Khám tổng quát
                </ReadMore>
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
        <Pagination />
      </div>
    </>
  );
}

export default Table;
