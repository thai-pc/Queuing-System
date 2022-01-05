import styles from './Info.module.scss';
import Input from '../Input/Input';
import clsx from 'clsx';

function Info() {
  const inputs = [
    {
      id: 1,
      name: 'fullname',
      type: 'text',
      label: 'Tên người dùng',
      value: 'Lê Quỳnh Ái Vân',
    },
    {
      id: 2,
      name: 'phone',
      type: 'text',
      label: 'Số điện thoại',
      value: '0767375921',
    },
    {
      id: 3,
      name: 'email',
      type: 'text',
      label: 'Email',
      value: 'adminSS01@domain.com',
    },
    // {
    //   id: 4,
    //   name: 'username',
    //   type: 'text',
    //   label: 'Tên đăng nhập',
    //   value: 'lequynhhaivan01',
    //   readonly: 'readonly',
    // },
    // {
    //   id: 5,
    //   name: 'password',
    //   type: 'text',
    //   label: 'Mật khẩu',
    //   value: '311940211',
    //   readonly: 'readonly',
    // },
    // {
    //   id: 6,
    //   name: 'email',
    //   type: 'text',
    //   label: 'Vai trò',
    //   value: 'Kế toán',
    //   readonly: 'readonly',
    // },
  ];

  return (
    <div className={styles.boxInfo}>
      <div className={clsx(styles.Info, 'd-flex')}>
        <div className={styles.boxAvatar}>
          <img src="../Image/avatar.png" alt="avatar" />
          <span className={styles.camera}>
            <i className="far fa-camera"></i>
          </span>
          <h3>Lê Quỳnh Ái Vân</h3>
        </div>
        <div className={styles.Left}>
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={input.value} size />
          ))}
        </div>
        <div className={styles.Right}>
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={input.value} size />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
