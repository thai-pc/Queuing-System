import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Textarea from '../Input/Textarea';
import Button from '../Button/Button';
import styles from './MainAddUpdateRole.module.scss';

function MainAddUpdateRole({ addRole, updateRole }) {
  const AddUpdateRole = [
    {
      name: 'nameRole',
      type: 'text',
      placeholder: addRole ? 'Nhập tên vai trò' : null,
      value: updateRole ? 'Kế toán' : '',
      label: 'Tên vai trò',
      icon: <span> *</span>,
    },
  ];
  let navigate = useNavigate();
  const handleCancle = (e) => {
    e.preventDefault();
    navigate('/systems/role/list');
  };
  return (
    <div className={styles.AddUpdateRole}>
      <h3 className="title">Danh sách vai trò</h3>
      <div className={styles.container}>
        <div className={styles.rows}>
          <h3 className="titleMain">Thông tin vai trò</h3>
          <div className={styles.formMain}>
            <div className={styles.left}>
              {AddUpdateRole.map((input) => (
                <Input
                  key={input.name}
                  value={input.value}
                  {...input}
                  AddUpdateRole
                />
              ))}
              <Textarea
                label="Mô tả:"
                placeholder="Mô tả dịch vụ"
                text={
                  updateRole
                    ? 'Chịu trách nhiệm thống kê số liệu và kiểm toán'
                    : null
                }
                role
              />
              <p className="note">
                <span>*</span> Là trường thông tin bắt buộc
              </p>
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
      </div>
      <div className={styles.boxButton}>
        <Button cancelBg text="Hủy bỏ" sizeDevice onClick={handleCancle} />
        <Button primary text="Thêm" sizeDevice />
      </div>
    </div>
  );
}

export default MainAddUpdateRole;
