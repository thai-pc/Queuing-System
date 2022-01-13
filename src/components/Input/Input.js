import styles from './Input.module.scss';
import clsx from 'clsx';

function Input({
  label,
  onChange,
  addDevice,
  error,
  size,
  device,
  fisrt,
  icon,
  serviceAdd,
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
      {device || addDevice || serviceAdd ? (
        <div
          className={clsx(styles.formGroup, {
            [styles.third]: device,
            [styles.addDevice]: addDevice,
            [styles.serviceAdd]: serviceAdd,
          })}
        >
          <label>
            {label}
            {icon}
          </label>
          <input {...inputProps} onChange={onChange} />
        </div>
      ) : null}
    </>
  );
}

export default Input;
