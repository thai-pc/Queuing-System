import React, { useState, useEffect } from 'react';
import styles from './Table.module.scss';
import ReactPaginate from 'react-paginate';
import clsx from 'clsx';
import Items from './Items';
import Title from './Title';

function Table({
  link,
  listDevice,
  listService,
  detailService,
  listNumber,
  report,
  listRole,
  diary,
}) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = detailService ? 8 : report || diary ? 10 : listRole ? 6 : 9;

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
  const api = link;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [api]);

  //Tăng lên 1 do mảng bắt đầu từ 0
  const handlePageClick = (e) => {
    let current = e.selected + 1;
    setCurrentPage(current);
  };

  return (
    <>
      <div
        className={clsx(styles.content, {
          [styles.listDevice]: listDevice,
          [styles.listService]: listService,
          [styles.detailService]: detailService,
          [styles.listNumber]: listNumber,
          [styles.report]: report,
          [styles.listRole]: listRole,
          [styles.diary]: diary,
        })}
      >
        <div className={styles.container}>
          <div className={styles.title}>
            {listDevice ? (
              <Title titleListDevice />
            ) : listService ? (
              <Title titleListService />
            ) : detailService ? (
              <Title titleDetailService />
            ) : listNumber ? (
              <Title titleListNumber />
            ) : report ? (
              <Title titleReport />
            ) : listRole ? (
              <Title titleListRole />
            ) : diary ? (
              <Title titleDiary />
            ) : null}
          </div>
          <div className={styles.body}>
            {listDevice ? (
              <Items currentItemDevice={currentItem} />
            ) : listService ? (
              <Items currentItemService={currentItem} />
            ) : detailService ? (
              <Items currentItemDetailService={currentItem} />
            ) : listNumber ? (
              <Items currentItemListNumber={currentItem} />
            ) : report ? (
              <Items currentItemReport={currentItem} />
            ) : listRole ? (
              <Items currentItemListRole={currentItem} />
            ) : diary ? (
              <Items currentItemDiary={currentItem} />
            ) : null}
          </div>
        </div>
        {listRole ? null : (
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
        )}
      </div>
    </>
  );
}

export default Table;
