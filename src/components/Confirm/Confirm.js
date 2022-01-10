import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from '../Forget/Forget.module.scss';

function Confirm() {
  const [values, setValues] = useState({
    password: '',
    confirm: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const inputs = [
    {
      id: 1,
      name: 'password',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Mật khẩu',
      label: 'Mật khẩu',
    },
    {
      id: 2,
      name: 'confirm',
      type: showConfirm ? 'text' : 'password',
      placeholder: 'Nhập lại mật khẩu',
      label: 'Nhập lại mật khẩu',
    },
  ];

  const handlePassword = () => {
    if (values.password !== '') {
      setShowPassword(!showPassword);
    }
  };

  const handleConfirm = () => {
    if (values.confirm !== '') {
      setShowConfirm(!showConfirm);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <div className={styles.boxTitle}>
        <h3>Đặt lại mật khẩu mới</h3>
      </div>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          fisrt
        />
      ))}
      <span className={styles.boxPass} onClick={handlePassword}>
        <i className={showPassword ? 'fal fa-eye' : 'fal fa-eye-slash'}></i>
      </span>
      <span className={styles.boxConfirm} onClick={handleConfirm}>
        <i className={showConfirm ? 'fal fa-eye' : 'fal fa-eye-slash'}></i>
      </span>
      <div className={styles.boxButton}>
        <Button primary text="Xác nhận" onClick={onLogin} />
      </div>
    </>
  );
}

export default Confirm;
