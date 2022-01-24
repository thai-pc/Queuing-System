import MenuBar from '../../components/MenuBar/MenuBar';
import TopBarUser from '../../components/TopBar/TopBarUser';

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
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Systems;
