import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCartData, setToCart } from "./redux/actions/cart";
import { fetchFavotiresData, setToFavorites } from "./redux/actions/favorites";
import { fetchOrdersData } from "./redux/actions/orders";
import { fetchItemsData } from "./redux/actions/home";

import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Overlay from "./components/Overlay";

const App = () => {
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = React.useState(false);
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const favoritesItems = useSelector(
    ({ favorites }) => favorites.favoritesItems
  );

  React.useEffect(() => {
    dispatch(fetchCartData());
    dispatch(fetchFavotiresData());
    dispatch(fetchOrdersData());
    dispatch(fetchItemsData());
  }, []);

  const onAddToCart = (obj) => {
    dispatch(setToCart(cartItems, obj));
  };

  const onAddToFavorite = (obj) => {
    dispatch(setToFavorites(favoritesItems, obj));
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
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
      <Overlay
        visible={showOverlay}
        closeOverlay={() => setShowOverlay(false)}
      />
    </>
  );
};

export default App;