import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartItemDel, checkout } from "../redux/actions/cart";

import { CloseSvg } from "../assets/svg/home";
import { ArrowRightSvg } from "../assets/svg/overlay";
import Info from "./Info";

const Overlay = ({ visible, closeOverlay }) => {
  const dispatch = useDispatch();
  const { isProcessed, totalPrice } = useSelector(({ home }) => ({
    isProcessed: home.isProcessed,
    totalPrice: home.totalPrice,
  }));
  const { cartItems, orderId, inOrderPlaced } = useSelector(({ cart }) => ({
    cartItems: cart.cartItems,
    orderId: cart.orderId,
    inOrderPlaced: cart.inOrderPlaced,
  }));

  const overlayRef = React.useRef();

  React.useEffect(() => {
    if (visible) {
      document.body.style.cssText = `padding-right: ${
        window.innerWidth - document.body.offsetWidth + "px"
      };
      overflow: hidden;`;
      document.body.addEventListener("click", handleOutsideClick);
    }
  }, [visible]);

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(overlayRef.current)) {
      document.body.removeEventListener("click", handleOutsideClick);
      closeOverlay();
      setTimeout(() => {
        document.body.style.cssText = `padding-right: 0px;
        overflow: visible;`;
      }, 500);
    }
  };

  const handleCloseOverlay = () => {
    document.body.removeEventListener("click", handleOutsideClick);
    closeOverlay();
    setTimeout(() => {
      document.body.style.cssText = `padding-right: 0px;
      overflow: visible;`;
    }, 500);
  };

  const onRemoveItem = (obj) => {
    dispatch(cartItemDel(cartItems, obj));
  };

  const onClickOrder = () => {
    dispatch(checkout(cartItems));
  };

  let tax = +((totalPrice * 5) / 100).toFixed(2);

  return (
    <div className={`overlay ${visible ? "_active" : ""}`}>
      <div ref={overlayRef} className="overlay__body">
        <div className="overlay__content">
          <div className="overlay__top">
            <h2 className="overlay__title">Корзина</h2>
            <button onClick={handleCloseOverlay} className="overlay__btn close">
              <CloseSvg />
            </button>
          </div>
          {cartItems.length > 0 ? (
            <>
              <ul className="overlay__list">
                {cartItems.map((obj, index) => (
                  <li key={`${obj.title}_${index}`} className="overlay__item">
                    <article className="overlay__product">
                      <div className="overlay__picture">
                        <img src={obj.imageUrl} alt="Заказ" />
                      </div>
                      <div className="overlay__info-order">
                        <p className="overlay__text">{obj.title}</p>
                        <span className="overlay__price">{obj.price} руб.</span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(obj)}
                        className="overlay__btn close"
                      >
                        <CloseSvg />
                      </button>
                    </article>
                  </li>
                ))}
              </ul>
              <div className="info-order">
                <div className="info-order__top">
                  <div className="info-order__in-total">
                    <span className="info-order__total">Итого:</span>
                    <div></div>
                    <span className="info-order__price">{totalPrice} руб.</span>
                  </div>
                  <div className="info-order__tax">
                    <span className="info-order__total">Налог 5%:</span>
                    <div></div>
                    <span className="info-order__price">{tax} руб.</span>
                  </div>
                </div>
                <div className="info-order__bottom">
                  <button
                    disabled={isProcessed}
                    onClick={onClickOrder}
                    className="info-order__checkout green-button"
                  >
                    Оформить заказ
                    <ArrowRightSvg />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Info
              handleCloseOverlay={handleCloseOverlay}
              imageUrl={
                inOrderPlaced
                  ? "images/cart/success.jpg"
                  : "images/cart/box.jpg"
              }
              title={inOrderPlaced ? "Заказ оформлен!" : "Корзина пустая"}
              text={
                inOrderPlaced
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overlay;