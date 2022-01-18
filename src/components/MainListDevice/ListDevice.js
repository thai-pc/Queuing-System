import Top from '../TopListAll/Top';
import Table from '../Table/Table';
import styles from './listDevice.module.scss';

function ListDevice() {
  return (
    <div>
      <Top listDevice />
      <div className={styles.box}>
        <Table
          link="https://jsonblob.com/api/jsonBlob/930461141252194304"
          listDevice
        />
      </div>
    </div>
  );
}

export default ListDevice;
