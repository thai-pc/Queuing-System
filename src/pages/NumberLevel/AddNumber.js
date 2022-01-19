import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { addNumber } from '../../components/TopBar/TopBarData';
import MainAddNumber from '../../components/MainListNumber/MainAddNumber';

function AddNumber() {
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={addNumber} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý dịch vụ</h3>
          <MainAddNumber />
        </div>
      </div>
    </div>
  );
}

export default AddNumber;
