import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Input/Textarea';
import { addServiceLeft } from '../Input/InputData';
import styles from './MainAddService.module.scss';

function MainAddService() {
  let navigate = useNavigate();
  const handleCancle = (e) => {
    e.preventDefault();
    navigate('/service/list');
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
        <div className={styles.bottom}>
          <h3 className="titleMain">Quy tắc cấp số</h3>
          <div className={styles.boxCheckbox}>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Tăng tự động từ:
              </div>
              <div className={styles.content}>
                <span className={styles.number}>0001</span>
                <span className={styles.to}>đến</span>
                <span className={styles.number}>999</span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Prefix:
              </div>
              <div className={styles.content}>
                <span className={styles.number}>0001</span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Surfix:
              </div>
              <div className={styles.content}>
                <span className={styles.number}>0001</span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.group}>
                <input type="checkbox" />
                Reset mỗi ngày
              </div>
            </div>
          </div>
          <p className={styles.note}>
            <span>*</span> Là trường thông tin bắt buộc
          </p>
        </div>
      </div>
      <div className={styles.boxButton}>
        <Button cancel text="Hủy bỏ" sizeDevice onClick={handleCancle} />
        <Button primary text="Thêm dịch vụ" sizeDevice />
      </div>
    </div>
  );
}

export default MainAddService;
