import clsx from 'clsx';
import styles from './Textarea.module.scss';
function Textarea({ label, placeholder, text, service, role }) {
  return (
    <div
      className={clsx(styles.formGroup, {
        [styles.service]: service,
        [styles.role]: role,
      })}
    >
      <label>{label}</label>
      <textarea placeholder={placeholder} defaultValue={text}></textarea>
    </div>
  );
}

export default Textarea;
