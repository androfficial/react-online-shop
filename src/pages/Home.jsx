import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearInputField, setSearchValue } from "../redux/actions/search";

import { SearchSvg, CloseSvg } from "../assets/svg/home";
import Product from "../components/Product/Product";
import HomeSlider from "../components/HomeSlider/HomeSlider";

const Home = ({ onAddToCart, onAddToFavorite, isItemAdded, isFavAdded }) => {
  const dispatch = useDispatch();
  const { items, isLoaded, isProcessed } = useSelector(({ home }) => ({
    items: home.items,
    isLoaded: home.isLoaded,
    isProcessed: home.isProcessed,
  }));
  const value = useSelector(({ search }) => search.value);

  const handleOnChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleClearInputField = () => {
    dispatch(clearInputField());
  };

  const renderItems = () => {
    const filteredItems = items.filter((obj) =>
      obj.title.toLowerCase().includes(value.toLowerCase())
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
              {value ? `Поиск по запросу: ${value}` : "Все кроссовки"}
            </h1>
          </div>
          <div className="products__search">
            <button className="products__btn">
              <SearchSvg />
            </button>
            <input
              type="text"
              onChange={handleOnChange}
              value={value}
              className="products__search-input input"
              placeholder="Поиск..."
            />
            <button
              onClick={handleClearInputField}
              className={`products__btn-close close ${
                value ? "_active" : "products__btn-close close"
              }`}
            >
              <CloseSvg />
            </button>
          </div>
        </div>
        <div className="products__items items-grid">{renderItems()}</div>
      </section>
    </>
  );
};

export default Home;