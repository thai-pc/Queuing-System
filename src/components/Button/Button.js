import styles from './Button.module.scss';
import clsx from 'clsx';
function Button({ primary, cancel, text }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.cancel]: cancel,
  });
  return <button className={classes}>{text}</button>;
}

export default Button;
