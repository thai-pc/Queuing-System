import styles from './Input.module.scss';
import clsx from 'clsx';
function Input({ label, onChange, error, size, id, eye, ...inputProps }) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      {size ? (
        <input {...inputProps} readOnly className={styles.secondary} />
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          className={clsx({ [styles.border]: error })}
        />
      )}
    </div>
  );
}

export default Input;
