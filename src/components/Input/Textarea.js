import styles from './Textarea.module.scss';

function Textarea({ label, placeholder }) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <textarea placeholder={placeholder}></textarea>
    </div>
  );
}

export default Textarea;
