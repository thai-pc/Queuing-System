import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { systemAddRole } from '../../components/TopBar/TopBarData';
import MainAddUpdateRole from '../../components/MainListSystems/MainAddUpdateRole';

function AddRole() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={systemAddRole} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <MainAddUpdateRole addRole />
        </div>
      </div>
    </div>
  );
}

export default AddRole;
