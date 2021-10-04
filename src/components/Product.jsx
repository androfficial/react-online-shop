import React from 'react';

import ProductLoading from './ProductLoading';
import { AddedSvg, UnLikeSvg, NoAddedSvg, LikeSvg } from '../assets/svg/product';

const Product = ({
  id,
  parentId,
  title,
  imageUrl,
  price,
  isLoaded = true,
  onAddToCart,
  onAddToFavorite,
  isItemAdded,
  isFavAdded,
  isProcessed,
}) => {
  const obj = { id, parentId, title, imageUrl, price };

  const handleAddToCart = () => {
    onAddToCart(obj);
  };

  const handleAddToFavorite = () => {
    onAddToFavorite(obj);
  };

  return (
    <>
      {isLoaded ? (
        <article className="products__item item-product">
          <div className="item-product__btns">
            {onAddToFavorite && (
              <button
                onClick={handleAddToFavorite}
                disabled={isProcessed}
                className={`item-product__btn ${
                  isFavAdded(parentId) ? 'item-product__btn--like' : 'item-product__btn--unlike'
                }`}>
                {isFavAdded(parentId) ? <LikeSvg /> : <UnLikeSvg />}
              </button>
            )}
          </div>
          <a href="/" className="item-product__picture">
            <img src={imageUrl} alt="Кроссовки" className="item-product__image" />
          </a>
          <div className="item-product__description">
            <a href="/" className="item-product__link">
              <h4 className="item-product__text">{title}</h4>
            </a>
          </div>
          <div className="item-product__info-order">
            <span className="item-product__title">Цена:</span>
            <div className="item-product__details">
              <span className="item-product__price">{price} руб.</span>
              {onAddToCart && (
                <button
                  onClick={handleAddToCart}
                  disabled={isProcessed}
                  className={`item-product__btn ${
                    isItemAdded(parentId) ? '' : 'item-product__btn--add'
                  }`}>
                  {isItemAdded(parentId) ? <AddedSvg /> : <NoAddedSvg />}
                </button>
              )}
            </div>
          </div>
        </article>
      ) : (
        <ProductLoading />
      )}
    </>
  );
};

export default Product;