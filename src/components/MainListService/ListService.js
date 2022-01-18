import Table from '../Table/Table';
import Top from '../TopListAll/Top';
import styles from '../MainListDevice/listDevice.module.scss';

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
