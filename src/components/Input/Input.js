import styles from './Input.module.scss';

function Input({ label, onChange, focused, size, id, eye, ...inputProps }) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      {size ? (
        <input {...inputProps} readOnly className={styles.secondary} />
      ) : (
        <input {...inputProps} onChange={onChange} />
      )}
    </div>
  );
}

export default Input;
