import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { listService } from '../../components/TopBar/TopBarData';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import ListService from '../../components/MainListService/ListService';

function Service() {
  let navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/service/list/add');
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={listService} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý dịch vụ</h3>
          <ListService />
          <ButtonDevice
            type="Thêm dịch vụ"
            icon="fas fa-plus-square"
            handleLink={handleAdd}
            device
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
