import React from 'react';
import { useSelector } from 'react-redux';

import { SearchSvg, CloseSvg } from '../assets/svg/home';
import { Product, HomeSlider, Pagination } from '../components';

const Home = ({ onAddToCart, onAddToFavorite, isItemAdded, isFavAdded }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const { items, itemsTotalCount, currentPage, isLoaded, isProcessed } = useSelector(
    ({ home }) => ({
      items: home.items,
      itemsTotalCount: home.itemsTotalCount,
      currentPage: home.currentPage,
      isLoaded: home.isLoaded,
      isProcessed: home.isProcessed,
    }),
  );

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const renderItems = () => {
    const filteredItems = items.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoaded ? filteredItems : [...Array(8)]).map((obj, index) => (
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
      <section className="main-slider">
        <div className="main-slider__body">
          <HomeSlider />
        </div>
      </section>
      <section className="products">
        <div className="products__top">
          <div className="products__text">
            <h1 className="products__title _title">
              {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
            </h1>
          </div>
          <div className="products__search">
            <button className="products__btn">
              <SearchSvg />
            </button>
            <input
              type="text"
              onChange={handleOnChange}
              value={searchValue}
              className="products__search-input input"
              placeholder="Поиск..."
            />
            <button
              onClick={() => setSearchValue('')}
              className={`products__btn-close close ${
                searchValue ? '_active' : 'products__btn-close close'
              }`}>
              <CloseSvg />
            </button>
          </div>
        </div>
        <div className="products__items items-grid">{renderItems()}</div>
        <Pagination
          itemsTotalCount={itemsTotalCount}
          currentPage={currentPage}
        />
      </section>
    </>
  );
};

export default Home;