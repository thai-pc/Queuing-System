import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Input/Textarea';
import Bottom from './Bottom';
import { addServiceLeft } from '../Input/InputData';
import styles from './MainAddService.module.scss';

function MainUpdateService() {
  let navigate = useNavigate();
  const handleCancle = (e) => {
    e.preventDefault();
    navigate('/service/list/detail');
  };
  return (
    <div className={styles.addService}>
      <div className={styles.box}>
        <h3 className="titleMain">Thông tin dịch vụ</h3>
        <div className={styles.formMain}>
          <div className={styles.left}>
            {addServiceLeft.map((input) => (
              <Input
                key={input.name}
                value={input.value}
                {...input}
                addService
              />
            ))}
          </div>
          <div className={styles.right}>
            <Textarea label="Mô tả:" placeholder="Mô tả dịch vụ" />
          </div>
        </div>
        <Bottom />
      </div>
      <div className={styles.boxButton}>
        <Button cancelBg text="Hủy bỏ" sizeDevice onClick={handleCancle} />
        <Button primary text="Cập nhật" sizeDevice />
      </div>
    </div>
  );
}

export default MainUpdateService;
