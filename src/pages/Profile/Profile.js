import Info from '../../components/Info/Info';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';

function Profile() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle text="Thông tin cá nhân" profile path="/profile" />
            <TopBarUser />
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
}

export default Profile;
