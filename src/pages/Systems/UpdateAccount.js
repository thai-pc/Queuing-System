import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import MainAddUpdateAccount from '../../components/MainListSystems/MainAddUpdateAccount';
import { updateAccount } from '../../components/TopBar/TopBarData';

function UpdateAccount() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={updateAccount} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <MainAddUpdateAccount updateAccount />
        </div>
      </div>
    </div>
  );
}

export default UpdateAccount;
