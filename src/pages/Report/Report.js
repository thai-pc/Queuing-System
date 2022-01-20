import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import Table from '../../components/Table/Table';
import { report } from '../../components/TopBar/TopBarData';
import styles from './Report.module.scss';

function Report() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={report} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <div className={styles.box}>
            <DateTimePicker listNumber />
            <div className={styles.table}>
              <Table
                link="https://jsonblob.com/api/jsonBlob/933590690357854208"
                report
              />
            </div>
            <ButtonDevice type="Tải về" icon="fas fa-file-download" report />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
