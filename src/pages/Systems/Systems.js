import styles from './Systems.module.scss';
import MenuBar from '../../components/MenuBar/MenuBar';
import TopBarUser from '../../components/TopBar/TopBarUser';
import SubSystems from './SubSystems';

function Systems() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <SubSystems />
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
