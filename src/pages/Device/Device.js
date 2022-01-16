import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ListDevice from '../../components/MainListDevice/ListDevice';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';

function Device() {
  let navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/device/list/add');
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle listDevice />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý thiết bị</h3>
          <ListDevice />
          <ButtonDevice
            type="Thêm thiết bị"
            icon="fas fa-plus-square"
            handleLink={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default Device;
