import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import MainAdd from '../../components/MainListDevice/MainAdd';
import { addService } from '../../components/TopBar/TopBarData';

function AddService() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={addService} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý dịch vụ</h3>
          <MainAdd />
        </div>
      </div>
    </div>
  );
}

export default AddService;
