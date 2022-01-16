import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';

function UpdateDevice() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle addDevice />
            <TopBarUser />
          </div>
        </div>
        <div className="box">Trang update</div>
      </div>
    </div>
  );
}

export default UpdateDevice;
