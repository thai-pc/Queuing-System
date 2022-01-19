import Table from '../Table/Table';
import TopMainListNumber from './TopMainListNumber';
import styles from '../MainListDevice/listDevice.module.scss';

function ListNumber() {
  return (
    <div>
      <TopMainListNumber />
      <div className={styles.box}>
        <Table
          link="https://jsonblob.com/api/jsonBlob/932648813865484288"
          listService
        />
      </div>
    </div>
  );
}

export default ListNumber;
