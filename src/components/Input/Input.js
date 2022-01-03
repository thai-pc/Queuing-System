import styles from './Input.module.scss';

function Input({ label, onChange, id, ...inputProps }) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}

export default Input;
