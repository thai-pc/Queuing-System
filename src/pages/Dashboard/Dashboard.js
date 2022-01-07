import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { dashboard } from '../../components/TopBar/TopBarData';
import styles from './Dashboard.module.scss';

function Dashboard() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            {dashboard.map((item, index) => {
              return <SubTitle dashboard={item} key={index} />;
            })}
            <TopBarUser />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxLeft}>
            <h3>Biểu đồ cấp số</h3>
          </div>
          <div className={styles.boxRight}>
            <h3>Tổng quan</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
