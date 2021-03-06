import styles from './Button.module.scss';
import clsx from 'clsx';
function Button({
  primary,
  cancel,
  cancelBg,
  sizeDevice,
  sizeUpdateDevice,
  text,
  onClick,
}) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.cancel]: cancel,
    [styles.cancelBg]: cancelBg,
    [styles.sizeDevice]: sizeDevice,
    [styles.sizeUpdateDevice]: sizeUpdateDevice,
  });
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
