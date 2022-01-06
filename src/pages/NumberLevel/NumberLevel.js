import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import TopBar from '../../components/TopBar/TopBar';

function NumberLevel() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <TopBar />
      </div>
    </div>
  );
}

export default NumberLevel;
