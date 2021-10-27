import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import { CartSvg, FavoriteSvg, ProfileSvg } from '../../assets/svg/header';

const Header = ({ showOverlay }) => {
  const { totalPriceWithSpaces } = useCart();
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo logo">
          <Link to="/" className="logo__picture">
            <img className="logo__image" src="images/logo.png" alt="Лого" />
          </Link>
          <div className="logo__info">
            <h3 className="logo__title">REACT SNEAKERS</h3>
            <p className="logo__text">Лучшие кроссовки только здесь</p>
          </div>
        </div>
        <ul className="header__info">
          <li onClick={showOverlay} className="header__item">
            <button className="header__btn header__btn--cart">
              <CartSvg />
            </button>
            <span className="header__item-price">{totalPriceWithSpaces} руб.</span>
          </li>
          <li className="header__item">
            <NavLink
              to="/favorites"
              className="header__btn header__btn--like"
              activeClassName="_active">
              <FavoriteSvg />
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/orders"
              className="header__btn header__btn--profile"
              activeClassName="_active">
              <ProfileSvg />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;