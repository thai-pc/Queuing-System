import Table from '../Table/Table';
import styles from './listDevice.module.scss';
import Top from './Top';

function ListService() {
  return (
    <div>
      <Top listService />
      <div className={styles.box}>
        <Table
          link="https://jsonblob.com/api/jsonBlob/932648813865484288"
          listService
        />
      </div>
    </div>
  );
}

export default ListService;
