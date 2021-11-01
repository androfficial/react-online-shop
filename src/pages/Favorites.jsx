import React from 'react';

import { Product, Empty } from '../components';

const Favorites = ({ favoritesItems, onAddToCart, onAddToFavorite, isItemAdded, isFavAdded }) => {
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