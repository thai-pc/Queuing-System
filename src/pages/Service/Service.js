import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import TopBarUser from '../../components/TopBar/TopBarUser';

function Service() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <TopBarUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
