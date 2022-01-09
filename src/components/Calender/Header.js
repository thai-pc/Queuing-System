import styles from './Header.module.scss';

export default function Header({ value, setValue }) {
  function currDay() {
    return value.format('DD');
  }
  function currMonthName() {
    return value.format('MMM');
  }
  function currYear() {
    return value.format('YYYY');
  }
  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }
  function nextMonth() {
    return value.clone().add(1, 'month');
  }
  function thisMonth() {
    return value.isSame(new Date(), 'month');
  }
  return (
    <div className={styles.header}>
      <div className={styles.box}>
        <div
          className={styles.previous}
          onClick={() => !thisMonth() && setValue(prevMonth())}
        >
          {!thisMonth() ? <i className="far fa-chevron-left"></i> : null}
        </div>
        <div className={styles.current}>
          {currDay()}
          <span> {currMonthName()} </span>
          {currYear()}
        </div>
        <div className={styles.next} onClick={() => setValue(nextMonth())}>
          <i className="far fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
