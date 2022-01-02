import styles from './Button.module.scss';
import clsx from 'clsx';
function Button({ primary }) {
  const classes = clsx(styles.btn, { [styles.primary]: primary });
  return <button className={classes}>Đăng nhập</button>;
}

export default Button;
