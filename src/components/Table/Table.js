import React, { useState, useEffect } from 'react';
import styles from './Table.module.scss';
import ReactPaginate from 'react-paginate';
import clsx from 'clsx';
import Items from './Items';

function Table({ listDevice, title }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;

  //Tính số trang
  const pages = [];
  for (let i = 0; i < Math.ceil(data.length / limit); i++) {
    pages.push(i);
  }
  const pageCount = pages.length;

  //Tính số mẫu tin bắt đầu và kết thúc

  const indexOfLastItem = currentPage * limit;
  const indexOfFisrtItem = indexOfLastItem - limit;

  const currentItem = data.slice(indexOfFisrtItem, indexOfLastItem);

  //Fecth api
  const api = `https://jsonblob.com/api/jsonBlob/930461141252194304`;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => (listDevice ? setData(json) : null));
  }, [listDevice, api]);

  //Tăng lên 1 do mảng bắt đầu từ 0
  const handlePageClick = (e) => {
    let current = e.selected + 1;
    setCurrentPage(current);
  };

  return (
    <>
      <div className={styles.content}>
        <div
          className={clsx(styles.container, {
            [styles.listDevice]: listDevice,
          })}
        >
          <div className={styles.title}>
            {title
              ? title.map((item, index) => {
                  return (
                    <div key={index} className={styles.rows}>
                      <div className={styles.col}>{item.code}</div>
                      <div className={styles.col}>{item.name}</div>
                      <div className={styles.col}>{item.address}</div>
                      <div className={styles.col}>{item.active}</div>
                      <div className={styles.col}>{item.connect}</div>
                      <div className={styles.col}>{item.service}</div>
                      <div className={styles.col}></div>
                      <div className={styles.col}></div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.body}>
            <Items currentItem={currentItem} />
          </div>
        </div>
        <div className={styles.page}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<i className="fas fa-caret-right"></i>}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            previousLabel={<i className="fas fa-caret-left"></i>}
            onPageChange={handlePageClick}
            containerClassName={styles.pagination}
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            previousClassName={styles.pageItem}
            previousLinkClassName={styles.pageLink}
            nextClassName={styles.pageItem}
            nextLinkClassName={styles.pageLink}
            breakClassName={styles.pageItem}
            breakLinkClassName={styles.pageLink}
            activeClassName={styles.active}
            activeLinkClassName={styles.activeLink}
            disabledClassName={styles.disabled}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
