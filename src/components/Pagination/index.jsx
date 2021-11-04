import React from 'react';
import { useDispatch } from 'react-redux';

import ReactPaginate from 'react-paginate';

import { homeActions } from '../../redux/actions';

const Pagination = ({ isLoaded, itemsTotalCount, pageSize, currentPage }) => {
  const dispatch = useDispatch();

  const handlePage = ({ selected: page }) => {
    dispatch(homeActions.fetchNewItems(page + 1));
  };

  return (
    <div className="products__pagination pagination">
      <ReactPaginate
        breakLinkClassName={`pagination__link ${isLoaded ? '' : '_disabled'}`}
        breakClassName="pagination__item"
        breakLabel="..."
        nextLinkClassName={`pagination__btn pagination__btn--next ${isLoaded ? '' : '_disabled'}`}
        nextLabel={
          <svg viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
            />
          </svg>
        }
        previousLinkClassName={`pagination__btn pagination__btn--prev ${
          isLoaded ? '' : '_disabled'
        }`}
        previousLabel={
          <svg viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
            />
          </svg>
        }
        pageRangeDisplayed={4}
        pageCount={Math.ceil(itemsTotalCount / pageSize)}
        marginPagesDisplayed="1"
        renderOnZeroPageCount={null}
        containerClassName="pagination__list"
        pageClassName="pagination__item"
        previousClassName="pagination__item pagination__item--prev"
        nextClassName="pagination__item pagination__item--next"
        pageLinkClassName={`pagination__link ${isLoaded ? '' : '_disabled'}`}
        activeLinkClassName="_selected"
        disabledClassName="_disabled"
        onPageChange={handlePage}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Pagination;