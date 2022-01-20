import { useNavigate } from 'react-router-dom';
import styles from './Table.module.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ReadMore } from './ReadMore';
import clsx from 'clsx';

function Items({
  currentItemDevice,
  currentItemService,
  currentItemDetailService,
  currentItemListNumber,
  currentItemReport,
}) {
  let navigate = useNavigate();
  const handeDetail = (e) => {
    e.preventDefault();
    let path = currentItemDevice
      ? '/device/list/detail'
      : currentItemService
      ? '/service/list/detail'
      : currentItemListNumber
      ? '/number-level/list/detail'
      : null;
    navigate(path);
  };
  const handeUpdate = (e) => {
    e.preventDefault();
    let path = currentItemDevice
      ? '/device/list/update'
      : currentItemService
      ? '/service/list/update'
      : null;
    navigate(path);
  };
  return (
    <>
      {currentItemDevice
        ? currentItemDevice.map((item) => {
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
                  <span className={styles.details} onClick={handeDetail}>
                    Chi tiết
                  </span>
                </div>
                <div className={styles.col}>
                  <span className={styles.update} onClick={handeUpdate}>
                    Cập nhật
                  </span>
                </div>
              </div>
            );
          })
        : null}
      {currentItemService
        ? currentItemService.map((item, index) => {
            return (
              <div className={styles.rows} key={index}>
                <div className={styles.col}>
                  {item.code} {index}
                </div>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.description}</div>
                <div
                  className={clsx(styles.col, {
                    [styles.red]: item.active === 'Ngưng hoạt động',
                    [styles.green]: item.active === 'Hoạt động',
                  })}
                >
                  <FiberManualRecordIcon />
                  {item.active}
                </div>
                <div className={styles.col}>
                  <span className={styles.details} onClick={handeDetail}>
                    Chi tiết
                  </span>
                </div>
                <div className={styles.col}>
                  <span className={styles.update} onClick={handeUpdate}>
                    Cập nhật
                  </span>
                </div>
              </div>
            );
          })
        : null}
      {currentItemDetailService
        ? currentItemDetailService.map((item, index) => {
            return (
              <div className={styles.rows} key={index}>
                <div className={styles.col}>{item.id}</div>
                <div
                  className={clsx(styles.col, {
                    [styles.blue]: item.active === 'Đang thực hiện',
                    [styles.green]: item.active === 'Đã hoàn thành',
                    [styles.gray]: item.active === 'Vắng',
                  })}
                >
                  <FiberManualRecordIcon />
                  {item.active}
                </div>
              </div>
            );
          })
        : null}
      {currentItemListNumber
        ? currentItemListNumber.map((item, index) => {
            return (
              <div className={styles.rows} key={index}>
                <div className={styles.col}>{item.id}</div>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.service}</div>
                <div className={styles.col}>{item.time}</div>
                <div className={styles.col}>{item.expiry}</div>
                <div
                  className={clsx(styles.col, {
                    [styles.red]: item.active === 'Bỏ qua',
                    [styles.gray]: item.active === 'Đã sử dụng',
                    [styles.blue]: item.active === 'Đang chờ',
                  })}
                >
                  <FiberManualRecordIcon />
                  {item.active}
                </div>
                <div className={styles.col}>{item.source}</div>
                <div className={styles.col}>
                  <span className={styles.details} onClick={handeDetail}>
                    Chi tiết
                  </span>
                </div>
              </div>
            );
          })
        : null}
      {currentItemReport
        ? currentItemReport.map((item, index) => {
            return (
              <div className={styles.rows} key={index}>
                <div className={styles.col}>{item.id}</div>
                <div className={styles.col}>{item.service}</div>
                <div className={styles.col}>{item.time}</div>
                <div
                  className={clsx(styles.col, {
                    [styles.red]: item.active === 'Bỏ qua',
                    [styles.gray]: item.active === 'Đã sử dụng',
                    [styles.blue]: item.active === 'Đang chờ',
                  })}
                >
                  <FiberManualRecordIcon />
                  {item.active}
                </div>
                <div className={styles.col}>{item.source}</div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Items;
