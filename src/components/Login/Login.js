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
            <div className={styles.boxLink}>
              <a href="/forget-password">Quên mật khẩu</a>
            </div>
            <div className={'d-flex flex-center'}>
              <Button primary />
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
