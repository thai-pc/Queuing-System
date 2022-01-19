import { useState } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

function Input({
  label,
  onChange,
  addDevice,
  error,
  size,
  device,
  fisrt,
  icon,
  value,
  serviceAdd,
  serviceUpdate,
  addService,
  subValue,
  updateDevice,
  detailService,
  listNumber,
  ...inputProps
}) {
  const [values, setValues] = useState(value);
  const onChangeValue = (e) => {
    setValues(e.target.value);
  };
  return (
    <>
      {fisrt ? (
        <div className={clsx(styles.formGroup, styles.fisrt)}>
          <label>{label}</label>
          <input
            {...inputProps}
            onChange={onChange}
            className={clsx({ [styles.border]: error })}
          />
        </div>
      ) : null}
      {size ? (
        <div className={clsx(styles.formGroup, { [styles.secondary]: size })}>
          <label>{label}</label>
          <input {...inputProps} readOnly value={value} />
        </div>
      ) : null}

      {device ||
      addDevice ||
      serviceAdd ||
      updateDevice ||
      addService ||
      detailService ||
      listNumber ? (
        <div
          className={clsx(styles.formGroup, {
            [styles.third]: device,
            [styles.addDevice]: addDevice,
            [styles.serviceAdd]: serviceAdd,
            [styles.updateDevice]: updateDevice,
            [styles.addService]: addService,
            [styles.detailService]: detailService,
            [styles.listNumber]: listNumber,
          })}
        >
          <label>
            {label}
            {icon}
          </label>
          {updateDevice || addService ? (
            <input {...inputProps} value={values} onChange={onChangeValue} />
          ) : (
            <input {...inputProps} onChange={onChange} />
          )}
        </div>
      ) : null}
      {serviceUpdate ? (
        <div
          className={clsx(styles.formGroup, {
            [styles.serviceUpdate]: serviceUpdate,
          })}
        >
          <label>
            {label}
            {icon}
          </label>
          <textarea {...inputProps} />
          <ul className={styles.list}>
            {subValue
              ? subValue.map((item, index) => {
                  return (
                    <li key={index} className={styles.item}>
                      <span>{item.text}</span>
                      {item.icon}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Input;
