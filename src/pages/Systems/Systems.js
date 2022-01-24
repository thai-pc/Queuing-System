import MenuBar from '../../components/MenuBar/MenuBar';
import TopBarUser from '../../components/TopBar/TopBarUser';
import SubSystems from '../../components/MenuBar/SubSystems';

function Systems() {
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

export default Systems;
