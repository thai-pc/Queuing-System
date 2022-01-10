import styles from './Input.module.scss';
import clsx from 'clsx';

function Input({
  label,
  onChange,
  error,
  size,
  device,
  id,
  fisrt,
  eye,
  ...inputProps
}) {
  return (
    <>
      {fisrt ? (
        <div className={clsx(styles.formGroup, styles.fisrt)}>
          <label>{label}</label>
          <input
            {...inputProps}
            onChange={onChange}
            className={clsx({ [styles.border]: error })}
          />
        </div>
      ) : null}
      {size ? (
        <div className={clsx(styles.formGroup, styles.fisrt)}>
          <label>{label}</label>
          <input {...inputProps} readOnly className={styles.secondary} />
        </div>
      ) : null}
      {device ? (
        <div className={clsx(styles.formGroup, styles.third)}>
          <label>{label}</label>
          <input {...inputProps} onChange={onChange} />
        </div>
      ) : null}
    </>
  );
}

export default Input;
