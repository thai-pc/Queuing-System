import { useState } from 'react';
import clsx from 'clsx';
import styles from './Login.module.scss';
import Logo from '../Logo/Logo';
import BgLogin from '../Image/BgLogin';
import Input from '../Input/Input';
import Button from '../Button/Button';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const [focused, setFocused] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    if (values.password !== '') {
      setShowPassword(!showPassword);
    }
  };
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Tên đăng nhập',
      label: 'Tên đăng nhập *',
      className: focused,
    },
    {
      id: 2,
      name: 'password',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Mật khẩu',
      label: 'Mật khẩu *',
      className: focused,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const user = {
    username: 'vodongthai',
    password: '12345678',
  };
  const [error, setError] = useState({
    error: 'd-none',
    forget: '',
    forgetError: 'd-none',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(values.username === user.username && values.password === user.password)
    ) {
      setError({
        error: '',
        forget: 'd-none',
        forgetError: 'd-flex',
      });
      setFocused('border');
    }
  };

  return (
    <div className={styles.login}>
      <div className="d-flex">
        <div className={styles.loginLeft}>
          <div className={styles.boxImg}>
            <Logo />
          </div>
          <form className={styles.formMain} onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <span className={styles.boxEye} onClick={handlePassword}>
              <i
                className={showPassword ? 'fal fa-eye' : 'fal fa-eye-slash'}
              ></i>
            </span>
            <p className={clsx(error.error, [styles.error])}>
              <i className="fal fa-exclamation-circle"></i> Sai mật khẩu hoặc
              tên đăng nhập
            </p>
            <div className={clsx(error.forget, styles.boxLink)}>
              <a href="/forget-password">Quên mật khẩu?</a>
            </div>
            <div className={'d-flex flex-center'}>
              <Button primary />
            </div>
            <div
              className={clsx(
                error.forgetError,
                styles.boxLink,
                'flex-center m-t'
              )}
            >
              <a href="/forget-password">Quên mật khẩu?</a>
            </div>
          </form>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.boxImg}>
            <BgLogin />
          </div>
          <div className={styles.boxTitle}>
            <p className={styles.system}>Hệ thống</p>
            <p className={styles.manage}>Quản Lý Xếp Hàng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
