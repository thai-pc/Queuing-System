import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { report } from '../../components/TopBar/TopBarData';

function Report() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            {report.map((item, index) => {
              return <SubTitle item={item} key={index} />;
            })}
            <TopBarUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
