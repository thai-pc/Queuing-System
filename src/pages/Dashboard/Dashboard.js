import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import Numerical from '../../components/Numerical/Numerical';
import styles from './Dashboard.module.scss';
import Overview from '../../components/Overview/Overview';
import Calender from '../../components/Calender/Calender';
import Chart from '../../components/Chart/Chart';

function Dashboard() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle text="Dashboard" dashboard path="/dashboard" />
            <TopBarUser />
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Dashboard;
