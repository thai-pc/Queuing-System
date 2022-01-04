import { useState } from 'react';

import Confirm from '../../components/Confirm/Confirm';
import Forget from '../../components/Forget/Forget';
import styles from '../Login/Login.module.scss';

function ForgetPass() {
  const [email, setEmail] = useState(false);

  return (
    <div className={styles.login}>
      <div className="d-flex">
        <div className={styles.loginLeft}>
          <div className={styles.boxImg}>
            <img src="../Image/logo.png" alt="logo" />
          </div>
          <form className={styles.formMain}>
            {email ? <Confirm /> : <Forget />}
          </form>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.boxImg}>
            <img src="../Image/forget.jpg" alt="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
