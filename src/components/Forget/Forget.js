import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Forget.module.scss';

function Forget() {
  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
  ];
  const [values, setValues] = useState('');

  const onChange = (e) => {
    setValues(e.target.value);
  };
  return (
    <>
      <div className={styles.boxTitle}>
        <h3>Đặt lại mật khẩu</h3>
        <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
      </div>
      {inputs.map((input) => (
        <Input key={input.id} {...input} value={values} onChange={onChange} />
      ))}
      <div className={styles.boxButton}>
        <Button cancel text="Hủy" />
        <Button primary text="Tiếp tục" />
      </div>
    </>
  );
}

export default Forget;
