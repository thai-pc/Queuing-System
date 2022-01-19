import Table from '../Table/Table';
import LeftMainDetailService from './LeftMainDetailService';
import styless from '../MainListDevice/listDevice.module.scss';
import styles from './MainDetailService.module.scss';
import TopMainDetailService from './TopMainDetailService';

function MainDetailService() {
  return (
    <div className={styles.detail}>
      <LeftMainDetailService />
      <div className={styles.right}>
        <div className={styles.container}>
          <TopMainDetailService />
          <div className={styless.box}>
            <Table
              link="https://jsonblob.com/api/jsonBlob/933313437111697408"
              detailService
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDetailService;
