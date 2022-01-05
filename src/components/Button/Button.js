import styles from './Button.module.scss';
import clsx from 'clsx';
function Button({ primary, cancel, text, onClick }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.cancel]: cancel,
  });
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
