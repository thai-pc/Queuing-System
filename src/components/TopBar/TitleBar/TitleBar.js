import styles from './TitleBar.module.scss';

function TitleBar({ primary, secondary, label, label1 }) {
  return (
    <div className={styles.boxTitle}>
      {primary ? <h3 className={styles.primary}>{label}</h3> : ''}
      {secondary ? (
        <>
          <h3 className={styles.secondary}>{label1}</h3>
          <span class="far fa-angle-right"></span>
          <h3 className={styles.primary}>{label}</h3>
        </>
      ) : null}
    </div>
  );
}

export default TitleBar;
