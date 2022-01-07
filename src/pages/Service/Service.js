import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { service } from '../../components/TopBar/TopBarData';

function Service() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            {service.map((item, index) => {
              return <SubTitle service={item} key={index} />;
            })}
            <TopBarUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
