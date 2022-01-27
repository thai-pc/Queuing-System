import { useState } from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { search } from '../../components/Input/InputData';
import Input from '../../components/Input/Input';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import Table from '../../components/Table/Table';
import { diary } from '../../components/TopBar/TopBarData';
import styles from '../Report/Report.module.scss';

function Diary() {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={diary} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <div className={styles.box}>
            <div className={styles.main}>
              <DateTimePicker listNumber />
              <div className={styles.keyboard}>
                <form className={styles.search}>
                  {search.map((input, index) => (
                    <Input
                      key={index}
                      {...input}
                      value={value}
                      device
                      onChange={onChange}
                    />
                  ))}
                  <button type="button" className={styles.btn}>
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.table}>
              <Table
                link="https://jsonblob.com/api/jsonBlob/936099404801392640"
                diary
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diary;
