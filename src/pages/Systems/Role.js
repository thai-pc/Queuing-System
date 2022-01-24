import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { systemRole } from '../../components/TopBar/TopBarData';

function Role() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={systemRole} />
            <TopBarUser />
          </div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Role;
