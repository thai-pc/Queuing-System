import { useState } from 'react';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import Dropdown from '../Dropdown/Dropdown';
import { search } from '../Input/InputData';
import Input from '../Input/Input';
import { detailService } from '../Dropdown/DropdownData';
import styles from './TopMainDetailService.module.scss';

function TopMainDetailService() {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(detailService[0].label);

  const [showactive, setShowActive] = useState(false);

  const handleShowActive = () => {
    setShowActive((prev) => !prev);
  };
  const handleActive = (e) => {
    setActive(e.target.innerText);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.top}>
      <div className={styles.item}>
        <h3>Trạng thái</h3>
        <Dropdown
          showdrop={showactive}
          value={active}
          list={detailService}
          handleShow={handleShowActive}
          handleValue={handleActive}
          detailService
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
                detailService
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

export default TopMainDetailService;
