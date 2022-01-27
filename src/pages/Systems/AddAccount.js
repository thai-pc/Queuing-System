import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import MainAddUpdateAccount from '../../components/MainListSystems/MainAddUpdateAccount';
import { addAccount } from '../../components/TopBar/TopBarData';

function AddAccount() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={addAccount} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <MainAddUpdateAccount addAccount />
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
