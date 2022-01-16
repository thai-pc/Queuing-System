import React from 'react';
import MainUpdate from '../../components/MainListDevice/MainUpdate';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { updateDevice } from '../../components/TopBar/TopBarData';

function UpdateDevice() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={updateDevice} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý thiết bị</h3>
          <MainUpdate />
        </div>
      </div>
    </div>
  );
}

export default UpdateDevice;
