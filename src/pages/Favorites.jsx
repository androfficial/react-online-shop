/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Product, Empty } from '@components';

const Favorites = ({
  favoritesItems,
  onAddToCart,
  onAddToFavorite,
  isItemAdded,
  isFavAdded,
  history,
}) =>
  favoritesItems.length > 0 ? (
    <section className='favorites'>
      <div className='favorites__top'>
        <h1 className='favorites__title _title'>Мои закладки</h1>
      </div>
      <div className='favorites__items items-grid'>
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
      imageUrl='images/favorites/sad.png'
      title='Закладок нет :('
      text='Вы ничего не добавляли в закладки.'
      history={history}
    />
  );

Favorites.propTypes = {
  favoritesItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      parentId: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
  isItemAdded: PropTypes.func.isRequired,
  isFavAdded: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Favorites;
