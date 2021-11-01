import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../redux/actions';

import { numberWithSpaces, useCart } from '../../hooks/useCart';

import Info from '../Common/Info';

const Cart = ({ visible, closeOverlay }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [orderInProcessed, setOrderInProcessed] = React.useState(false);
  const [inOrderPlaced, setInOrderPlaced] = React.useState(false);

  const { taxWithSpaces, totalPriceWithSpaces } = useCart();
  const { cartItems, orderId } = useSelector(({ cart }) => ({
    cartItems: cart.cartItems,
    orderId: cart.orderId,
  }));

  const overlayRef = React.useRef();

  const onRemoveItem = async (obj) => {
    setIsLoading(true);
    await dispatch(cartActions.cartItemDel(obj));
    setIsLoading(false);
  };

  const onClickOrder = async () => {
    setOrderInProcessed(true);
    await dispatch(cartActions.checkout(cartItems));
    setOrderInProcessed(false);
    setInOrderPlaced(true);
  };

  const handleCloseOverlay = () => {
    document.body.removeEventListener('click', handleOutsideClick);
    closeOverlay();
  };

  const handleOutsideClick = React.useCallback(
    (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(overlayRef.current)) {
        document.body.removeEventListener('click', handleOutsideClick);
        closeOverlay();
      }
    },
    [closeOverlay],
  );

  React.useEffect(() => {
    if (visible) {
      document.body.addEventListener('click', handleOutsideClick);
    }
  }, [visible, handleOutsideClick]);

  return (
    <div className={`overlay ${visible ? '_active' : ''}`}>
      <div ref={overlayRef} className="overlay__body">
        <div className="overlay__content">
          <div className="overlay__top">
            <h2 className="overlay__title">Корзина</h2>
            <button onClick={handleCloseOverlay} className="overlay__btn close">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" />
                <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" />
              </svg>
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
                        <span className="overlay__price">{numberWithSpaces(obj.price)} руб.</span>
                      </div>
                      <button
                        disabled={isLoading}
                        onClick={() => onRemoveItem(obj)}
                        className="overlay__btn close">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" />
                          <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" />
                        </svg>
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
                    <span className="info-order__price">{totalPriceWithSpaces} руб.</span>
                  </div>
                  <div className="info-order__tax">
                    <span className="info-order__total">Налог 5%:</span>
                    <div></div>
                    <span className="info-order__price">{taxWithSpaces} руб.</span>
                  </div>
                </div>
                <div className="info-order__bottom">
                  <button
                    disabled={orderInProcessed}
                    onClick={onClickOrder}
                    className="info-order__checkout green-button">
                    Оформить заказ
                    <svg viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 7H14.7143"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.71436 1L14.7144 7L8.71436 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Info
              handleCloseOverlay={handleCloseOverlay}
              imageUrl={inOrderPlaced ? 'images/cart/success.jpg' : 'images/cart/box.jpg'}
              title={inOrderPlaced ? 'Заказ оформлен!' : 'Корзина пустая'}
              text={
                inOrderPlaced
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;