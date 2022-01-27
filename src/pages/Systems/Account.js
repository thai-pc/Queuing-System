import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { listAccount } from '../../components/TopBar/TopBarData';
import MainListAccount from '../../components/MainListSystems/MainListAccount';

function Account() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={listAccount} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <MainListAccount />
        </div>
      </div>
    </div>
  );
}

export default Account;
