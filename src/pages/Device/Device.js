import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ListDevice from '../../components/MainListDevice/ListDevice';
import { device } from '../../components/TopBar/TopBarData';

function Device() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            {device.map((item, index) => {
              return <SubTitle device={item} key={index} />;
            })}
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          {device.map((item, index) => {
            return (
              <h3 key={index} className="title">
                {item.titleSub}
              </h3>
            );
          })}
          <ListDevice />
        </div>
      </div>
    </div>
  );
}

export default Device;
