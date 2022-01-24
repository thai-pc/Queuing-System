import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import MainListRole from '../../components/MainListSystems/MainListRole';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import { systemRole } from '../../components/TopBar/TopBarData';

function Role() {
  let navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/systems/role/add');
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={systemRole} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <MainListRole />
          <ButtonDevice
            type="Thêm vai trò"
            icon="fas fa-plus-square"
            handleLink={handleAdd}
            listRole
          />
        </div>
      </div>
    </div>
  );
}

export default Role;
