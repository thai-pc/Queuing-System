import Info from '../../components/Info/Info';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { proflie } from '../../components/TopBar/TopBarData';

function Profile() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            {proflie.map((item, index) => {
              return <SubTitle profile={item} key={index} />;
            })}
            <TopBarUser />
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
}

export default Profile;
