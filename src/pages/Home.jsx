/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Product, HomeSlider, Pagination } from '@components';

const Home = ({
  isProcessed,
  onAddToCart,
  onAddToFavorite,
  isItemAdded,
  isFavAdded,
}) => {
  const [searchValue, setSearchValue] = React.useState('');
  const { items, itemsTotalCount, pageSize, currentPage, isLoaded } =
    useSelector(({ home }) => ({
      items: home.items,
      itemsTotalCount: home.itemsTotalCount,
      pageSize: home.pageSize,
      currentPage: home.currentPage,
      isLoaded: home.isLoaded,
    }));

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const renderItems = () => {
    const filteredItems = items.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoaded ? filteredItems : [...Array(12)]).map((obj, index) => (
      <Product
        isProcessed={isProcessed}
        isLoaded={isLoaded}
        isItemAdded={isItemAdded}
        isFavAdded={isFavAdded}
        onAddToCart={onAddToCart}
        onAddToFavorite={onAddToFavorite}
        key={index}
        {...obj}
      />
    ));
  };

  return (
    <>
      <section className='main-slider'>
        <div className='main-slider__body'>
          <HomeSlider />
        </div>
      </section>
      <section className='products'>
        <div className='products__top'>
          <div className='products__text'>
            <h1 className='products__title _title'>
              {searchValue
                ? `Поиск по запросу: ${searchValue}`
                : 'Все кроссовки'}
            </h1>
          </div>
          <div className='products__search'>
            <button className='products__btn' type='button'>
              <svg
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>{' '}
            </button>
            <input
              type='text'
              onChange={handleOnChange}
              value={searchValue}
              className='products__search-input input'
              placeholder='Поиск...'
            />
            <button
              onClick={() => setSearchValue('')}
              className={`products__btn-close close ${
                searchValue ? '_active' : 'products__btn-close close'
              }`}
              type='button'
            >
              <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <rect
                  x='0.5'
                  y='0.5'
                  width='31'
                  height='31'
                  rx='7.5'
                  fill='white'
                />
                <path d='M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z' />
              </svg>{' '}
            </button>
          </div>
        </div>
        <div className='products__items items-grid'>{renderItems()}</div>
        <Pagination
          isLoaded={isLoaded}
          itemsTotalCount={itemsTotalCount}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </section>
    </>
  );
};

Home.propTypes = {
  isProcessed: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
  isItemAdded: PropTypes.func.isRequired,
  isFavAdded: PropTypes.func.isRequired,
};

export default Home;
