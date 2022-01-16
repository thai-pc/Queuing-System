import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import MainAdd from '../../components/MainListDevice/MainAdd';
import { addDevice } from '../../components/TopBar/TopBarData';

function AddDevice() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={addDevice} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý thiết bị</h3>
          <MainAdd />
        </div>
      </div>
    </div>
  );
}

export default AddDevice;
