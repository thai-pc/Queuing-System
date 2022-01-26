import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { systemUpdateRole } from '../../components/TopBar/TopBarData';
import MainAddUpdateRole from '../../components/MainListSystems/MainAddUpdateRole';

function UpdateRole() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={systemUpdateRole} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <MainAddUpdateRole updateRole />
        </div>
      </div>
    </div>
  );
}

export default UpdateRole;
