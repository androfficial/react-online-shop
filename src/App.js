import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions, favoritesActions, ordersActions, homeActions } from './redux/actions';

import { Home, Favorites, Orders } from './pages';

import { Header, Cart } from './components';

const App = () => {
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [isProcessed, setIsProcessed] = React.useState(false);

  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const favoritesItems = useSelector(({ favorites }) => favorites.favoritesItems);

  React.useEffect(() => {
    dispatch(cartActions.fetchCartData());
    dispatch(favoritesActions.fetchFavoritesData());
    dispatch(ordersActions.fetchOrdersData());
    dispatch(homeActions.fetchItemsData());
  }, [dispatch]);

  const onAddToCart = async (obj) => {
    setIsProcessed(true);
    await dispatch(cartActions.setToCart(cartItems, obj));
    setIsProcessed(false);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const onAddToFavorite = async (obj) => {
    setIsProcessed(true);
    await dispatch(favoritesActions.setToFavorites(favoritesItems, obj));
    setIsProcessed(false);
  };

  const isFavAdded = (parentId) => {
    return favoritesItems.some((obj) => obj.parentId === parentId);
  };

  return (
    <>
      <Header showOverlay={() => setShowOverlay(true)} />
      <main className="page">
        <div className="_container">
          <Route
            path="/"
            render={() => (
              <Home
                isProcessed={isProcessed}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isItemAdded={isItemAdded}
                isFavAdded={isFavAdded}
              />
            )}
            exact
          />
          <Route
            path="/favorites"
            render={() => (
              <Favorites
                favoritesItems={favoritesItems}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isItemAdded={isItemAdded}
                isFavAdded={isFavAdded}
              />
            )}
            exact
          />
          <Route path="/orders" component={Orders} exact />
        </div>
      </main>
      <Cart visible={showOverlay} closeOverlay={() => setShowOverlay(false)} />
    </>
  );
};

export default App;