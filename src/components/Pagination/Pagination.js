import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

function Pagination() {
  const handlePageClick = (event) => {};

  return (
    <div className={styles.Page}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className="fas fa-caret-right"></i>}
        pageCount={10}
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
  );
}

export default Pagination;
