import styles from './MainDashboard.module.scss';
import Numerical from '../../components/Numerical/Numerical';
import Overview from '../../components/Overview/Overview';
import Calender from '../../components/Calender/Calender';
import Chart from '../../components/Chart/Chart';

function MainDashboard() {
  return (
    <div className={styles.box}>
      <div className={styles.boxLeft}>
        <h3>Biểu đồ cấp số</h3>
        <Numerical />
        <Chart />
      </div>
      <div className={styles.boxRight}>
        <h3>Tổng quan</h3>
        <Overview />
        <Calender />
      </div>
    </div>
  );
}

export default MainDashboard;
