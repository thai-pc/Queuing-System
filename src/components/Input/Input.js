import styles from './Input.module.scss';

function Input() {
  return (
    <div className={styles.formGroup}>
      <label>Tên đăng nhập *</label>
      <input />
    </div>
  );
}

export default Input;
