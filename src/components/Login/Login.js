import styles from './Login.module.scss';
import Logo from '../Logo/Logo';
import BgLogin from '../Image/BgLogin';
import Input from '../Input/Input';
import Button from '../Button/Button';

function Login() {
  return (
    <div className={styles.login}>
      <div className="d-flex">
        <div className={styles.loginLeft}>
          <div className={styles.boxImg}>
            <Logo />
          </div>
          <form className={styles.formMain}>
            <Input />
            <Input />
            <a>Quên mật khẩu</a>
            <Button primary />
          </form>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.boxImg}>
            <BgLogin />
          </div>
          <p>Hệ Thống</p>
          <p>Quản Lý Xếp Hàng</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
