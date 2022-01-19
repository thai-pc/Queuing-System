import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { updateService } from '../../components/TopBar/TopBarData';
import MainUpdateService from '../../components/MainListService/MainUpdateService';

function UpdateServic() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={updateService} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý dịch vụ</h3>
          <MainUpdateService />
        </div>
      </div>
    </div>
  );
}

export default UpdateServic;
