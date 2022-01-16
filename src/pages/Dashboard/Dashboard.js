import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { dashboard } from '../../components/TopBar/TopBarData';
import MainDashboard from './MainDashboard';

function Dashboard() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={dashboard} />
            <TopBarUser />
          </div>
        </div>
        <MainDashboard />
      </div>
    </div>
  );
}

export default Dashboard;
