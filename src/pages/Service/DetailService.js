import { useNavigate } from 'react-router-dom';
import { detailService } from '../../components/TopBar/TopBarData';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import MainDetailService from '../../components/MainListService/MainDetailService';

function DetailService() {
  let navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    navigate('/service/list/update');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/service/list');
  };

  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={detailService} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý thiết bị</h3>
          <MainDetailService />
          <ButtonDevice
            type="Cập nhật danh sách"
            icon="fas fa-pen-square"
            type1="Quay lại"
            icon1="fas fa-caret-square-left"
            handleLink={handleUpdate}
            handleCancel={handleCancel}
            service
          />
        </div>
      </div>
    </div>
  );
}

export default DetailService;
