import Input from '../Input/Input';
import { profileLeft, profileRight } from '../Input/InputData';
import clsx from 'clsx';
import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.boxInfo}>
      <div className={clsx(styles.Info, 'd-flex')}>
        <div className={styles.boxAvatar}>
          <img src="../../avatar.png" alt="avatar" />
          <span className={styles.camera}>
            <i className="far fa-camera"></i>
          </span>
          <h3>Lê Quỳnh Ái Vân</h3>
        </div>
        <div className={styles.Left}>
          {profileLeft.map((input) => (
            <Input key={input.id} {...input} value={input.value} size />
          ))}
        </div>
        <div className={styles.Right}>
          {profileRight.map((input) => (
            <Input key={input.id} {...input} value={input.value} size />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
