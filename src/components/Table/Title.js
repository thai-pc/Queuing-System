import { useState } from 'react';
import DropdownTable from './DropdownTable';
import {
  device,
  listService,
  detailService,
  listNumber,
  listReport,
  listRole,
  diary,
} from '../Table/TableData';
import {
  idReport,
  serviceReport,
  timeReport,
  activeReport,
  sourceReport,
} from './DropdownTableData';
import styles from './Table.module.scss';

function Title({
  titleListDevice,
  titleListService,
  titleDetailService,
  titleListNumber,
  titleReport,
  titleListRole,
  titleDiary,
}) {
  const [isId, setIsID] = useState(false);
  const [isService, setService] = useState(false);
  const [isTime, setTime] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isSource, setSource] = useState(false);

  const handleClickId = () => {
    setIsID(!isId);
  };
  const handleClickService = () => {
    setService(!isService);
  };
  const handleClickTime = () => {
    setTime(!isTime);
  };
  const handleClickActive = () => {
    setActive(!isActive);
  };
  const handleClickSource = () => {
    setSource(!isSource);
  };

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
      {titleListNumber
        ? listNumber.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>{item.id}</div>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.service}</div>
                <div className={styles.col}>{item.time}</div>
                <div className={styles.col}>{item.expiry}</div>
                <div className={styles.col}>{item.active}</div>
                <div className={styles.col}>{item.source}</div>
                <div className={styles.col}></div>
              </div>
            );
          })
        : null}
      {titleReport
        ? listReport.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>
                  {item.id}
                  <span className={styles.filter} onClick={handleClickId}>
                    <i className="far fa-arrows-v"></i>
                  </span>
                  {isId && <DropdownTable list={idReport} scroll />}
                </div>
                <div className={styles.col}>
                  {item.service}
                  <span className={styles.filter} onClick={handleClickService}>
                    <i className="far fa-arrows-v"></i>
                  </span>
                  {isService && <DropdownTable list={serviceReport} service />}
                </div>
                <div className={styles.col}>
                  {item.time}
                  <span className={styles.filter} onClick={handleClickTime}>
                    <i className="far fa-arrows-v"></i>
                  </span>
                  {isTime && <DropdownTable list={timeReport} scroll />}
                </div>
                <div className={styles.col}>
                  {item.active}
                  <span className={styles.filter} onClick={handleClickActive}>
                    <i className="far fa-arrows-v"></i>
                  </span>
                  {isActive && <DropdownTable list={activeReport} />}
                </div>
                <div className={styles.col}>
                  {item.source}
                  <span className={styles.filter} onClick={handleClickSource}>
                    <i className="far fa-arrows-v"></i>
                  </span>
                  {isSource && <DropdownTable list={sourceReport} />}
                </div>
              </div>
            );
          })
        : null}
      {titleListRole
        ? listRole.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.user}</div>
                <div className={styles.col}>{item.description}</div>
                <div className={styles.col}></div>
              </div>
            );
          })
        : null}
      {titleDiary
        ? diary.map((item, index) => {
            return (
              <div key={index} className={styles.rows}>
                <div className={styles.col}>{item.name}</div>
                <div className={styles.col}>{item.time}</div>
                <div className={styles.col}>{item.ip}</div>
                <div className={styles.col}>{item.operation}</div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Title;
