import { useNavigate } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import { listNumber } from '../../components/TopBar/TopBarData';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import ListNumber from '../../components/MainListNumber/ListNumber';

function NumberLevel() {
  let navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/number-level/list/add');
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={listNumber} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý cấp số</h3>
          <ListNumber />
          <ButtonDevice
            type="Cấp số mới"
            icon="fas fa-plus-square"
            handleLink={handleAdd}
            device
          />
        </div>
      </div>
    </div>
  );
}

export default NumberLevel;
