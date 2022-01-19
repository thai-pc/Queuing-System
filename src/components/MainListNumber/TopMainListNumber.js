import { useState } from 'react';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import Dropdown from '../Dropdown/Dropdown';
import { search } from '../Input/InputData';
import Input from '../Input/Input';
import {
  listNumberSource,
  listNumberService,
  listNumberActive,
} from '../Dropdown/DropdownData';
import styles from './TopMainListNumber.module.scss';

function TopMainListNumber() {
  const [value, setValue] = useState('');

  const [active, setActive] = useState(listNumberActive[0].label);
  const [source, setSource] = useState(listNumberSource[0].label);
  const [service, setService] = useState(listNumberService[0].label);

  const [showactive, setShowActive] = useState(false);
  const [showsource, setShowSource] = useState(false);
  const [showservice, setShowService] = useState(false);

  const handleShowActive = () => {
    setShowActive((prev) => !prev);
  };
  const handleActive = (e) => {
    setActive(e.target.innerText);
  };
  const handleShowSource = () => {
    setShowSource((prev) => !prev);
  };
  const handleSource = (e) => {
    setSource(e.target.innerText);
  };
  const handleShowService = () => {
    setShowService((prev) => !prev);
  };
  const handleService = (e) => {
    setService(e.target.innerText);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.top}>
      <div className={styles.item}>
        <h3>Tên dịch vụ</h3>
        <Dropdown
          showdrop={showservice}
          value={service}
          list={listNumberService}
          handleShow={handleShowService}
          handleValue={handleService}
          listNumber
        />
      </div>
      <div className={styles.item}>
        <h3>Trạng thái</h3>
        <Dropdown
          showdrop={showactive}
          value={active}
          list={listNumberActive}
          handleShow={handleShowActive}
          handleValue={handleActive}
          listNumber
        />
      </div>
      <div className={styles.item}>
        <h3>Nguồn cấp</h3>
        <Dropdown
          showdrop={showsource}
          value={source}
          list={listNumberSource}
          handleShow={handleShowSource}
          handleValue={handleSource}
          listNumber
        />
      </div>
      <div className={styles.item}>
        <DateTimePicker listNumber />
      </div>
      <div className={styles.item}>
        <div className={styles.keyboard}>
          <form className={styles.search}>
            {search.map((input, index) => (
              <Input
                key={index}
                {...input}
                value={value}
                listNumber
                onChange={onChange}
              />
            ))}
            <button type="button" className={styles.btn}>
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TopMainListNumber;
