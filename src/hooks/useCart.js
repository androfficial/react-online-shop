import { useSelector } from 'react-redux';

export const numberWithSpaces = (x) => {
  let parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

export const useCart = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  const tax = ((totalPrice * 5) / 100).toFixed(2);

  const totalPriceWithSpaces = numberWithSpaces(totalPrice);
  const taxWithSpaces = numberWithSpaces(tax);

  return { taxWithSpaces, totalPriceWithSpaces };
};