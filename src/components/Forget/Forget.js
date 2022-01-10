import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Forget.module.scss';

function Forget({ parentCallback }) {
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

  const sendData = () => {
    parentCallback(values);
  };
  const onClick = (e) => {
    e.preventDefault();
    sendData();
  };
  let navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <div className={styles.boxTitle}>
        <h3>Đặt lại mật khẩu</h3>
        <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
      </div>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={values}
          fisrt
          onChange={onChange}
        />
      ))}
      <div className={styles.boxButton}>
        <Button cancel text="Hủy" onClick={onLogin} />
        <Button primary text="Tiếp tục" onClick={onClick} />
      </div>
    </>
  );
}

export default Forget;
