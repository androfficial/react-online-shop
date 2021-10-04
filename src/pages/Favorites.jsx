import React from "react";
import { useSelector } from "react-redux";

import Empty from "../components/Empty";
import Product from "../components/Product";

const Favorites = ({
  onAddToCart,
  onAddToFavorite,
  isItemAdded,
  isFavAdded,
}) => {
  const favoritesItems = useSelector(({ favorites }) => favorites.favoritesItems);
  return (
    <>
      {favoritesItems.length > 0 ? (
        <section className="favorites">
          <div className="favorites__top">
            <h1 className="favorites__title _title">Мои закладки</h1>
          </div>
          <div className="favorites__items items-grid">
            {favoritesItems.map((obj, index) => (
              <Product
                isItemAdded={isItemAdded}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isFavAdded={isFavAdded}
                {...obj}
                key={`${obj.title}_${index}`}
              />
            ))}
          </div>
        </section>
      ) : (
        <Empty
          imageUrl="images/favorites/sad.png"
          title="Закладок нет :("
          text="Вы ничего не добавляли в закладки."
        />
      )}
    </>
  );
};

export default Favorites;