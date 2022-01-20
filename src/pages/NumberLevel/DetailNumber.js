import { useNavigate } from 'react-router-dom';
import MainDetailNumber from '../../components/MainListNumber/MainDetailNumber';
import MenuBar from '../../components/MenuBar/MenuBar';
import SubTitle from '../../components/TopBar/SubTitle';
import TopBarUser from '../../components/TopBar/TopBarUser';
import ButtonDevice from '../../components/ButtonDevice/ButtonDevice';
import { detailNumber } from '../../components/TopBar/TopBarData';

function DetailNumber() {
  let navigate = useNavigate();
  const handleCancel = () => {
    navigate('/number-level/list');
  };
  return (
    <div className="Layout d-flex">
      <MenuBar />
      <div className="context">
        <div className="boxTopbar">
          <div className="container">
            <SubTitle list={detailNumber} />
            <TopBarUser />
          </div>
        </div>
        <div className="box">
          <h3 className="title">Quản lý cấp số</h3>
          <MainDetailNumber />
          <ButtonDevice
            type="Quay lại"
            icon="fas fa-pen-square"
            handleLink={handleCancel}
            detailNumber
          />
        </div>
      </div>
    </div>
  );
}

export default DetailNumber;
