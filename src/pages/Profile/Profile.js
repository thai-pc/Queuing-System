import Info from '../../components/Info/Info';
import MenuBar from '../../components/MenuBar/MenuBar';
import TopBar from '../../components/TopBar/TopBar';

function Profile() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <TopBar />
        <Info />
      </div>
    </div>
  );
}

export default Profile;
