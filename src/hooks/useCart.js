import { useSelector } from 'react-redux';

export const useCart = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { totalPrice };
};