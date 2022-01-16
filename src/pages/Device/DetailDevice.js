import { useNavigate } from 'react-router-dom';
import MainDetail from '../../components/MainListDevice/MainDetail';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import { detailDevice } from '../../components/TopBar/TopBarData';

function DetailDevice() {
  let navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    navigate('/device/list/update');
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={detailDevice} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý thiết bị</h3>
          <MainDetail />
          <ButtonDevice
            type="Cập nhật thiết bị"
            icon="fas fa-pen-square"
            handleLink={handleUpdate}
            detail
          />
        </div>
      </div>
    </div>
  );
}

export default DetailDevice;
