import clsx from 'clsx';
import { useState } from 'react';
import styles from './Table.module.scss';

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p>
      {isReadMore ? text.slice(0, 23) + '...' : text + ' '}
      <span
        onClick={toggleReadMore}
        className={clsx(styles.viewmore, { [styles.block]: isReadMore })}
      >
        {isReadMore ? 'Xem thêm' : 'Ẩn đi'}
      </span>
    </p>
  );
};
