import React, { useState } from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ListDevice from '../../components/MainListDevice/ListDevice';
import AddDevice from './AddDevice';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';

function Device() {
  const [addDevice, setaddDevice] = useState(false);
  const handleLinkAdd = () => {
    setaddDevice(!false);
  };

  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            {addDevice ? <SubTitle addDevice /> : <SubTitle listDevice />}
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">
            {addDevice ? 'Quản lý thiết bị' : 'Danh sách thiết bị'}
          </h3>
          {addDevice ? <AddDevice /> : <ListDevice />}
          {addDevice ? null : (
            <ButtonDevice
              type="Thêm thiết bị"
              icon="fas fa-plus-square"
              handleLink={handleLinkAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Device;
