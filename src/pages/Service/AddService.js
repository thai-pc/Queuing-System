import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { addService } from '../../components/TopBar/TopBarData';
import MainAddService from '../../components/MainListService/MainAddService';

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
          <MainAddService />
        </div>
      </div>
    </div>
  );
}

export default AddService;
