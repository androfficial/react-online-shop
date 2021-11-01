import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6149bb1b07549f001755a547.mockapi.io/',
});

export const globalAPI = {
  getItems() {
    try {
      return instance.get('items');
    } catch (error) {
      console.error(`Ошибка при получении товаров: ${error}`);
      alert('Ошибка при получении товаров.');
    }
  },
  getNewItems(page) {
    try {
      return instance.get(`items/${page}`);
    } catch (error) {
      console.error(`Ошибка при получении товаров: ${error}`);
      alert('Ошибка при получении товаров.');
    }
  },
  getCartItems() {
    try {
      return instance.get('cart');
    } catch (error) {
      console.error(`Ошибка при получении товаров в корзине: ${error}`);
      alert('Ошибка при получении товаров в корзине.');
    }
  },
  getFavoriteItems() {
    try {
      return instance.get('favorites');
    } catch (error) {
      console.error(`Ошибка при получении моих закладок: ${error}`);
      alert('Ошибка при получении моих закладок.');
    }
  },
  getOrders() {
    try {
      return instance.get('orders');
    } catch (error) {
      console.error(`Ошибка при получении списка заказов: ${error}`);
      alert('Ошибка при получении списка заказов.');
    }
  },
  addCartItem(obj) {
    try {
      return instance.post('cart', obj);
    } catch (error) {
      console.error(`Ошибка при добавлении товара в корзину: ${error}`);
      alert('Ошибка при добавлении товара в корзину.');
    }
  },
  addFavoriteItem(obj) {
    try {
      return instance.post('favorites', obj);
    } catch (error) {
      console.error(`Ошибка при добавлении товара в избранное: ${error}`);
      alert('Ошибка при добавлении товара в избранное.');
    }
  },
  delCartItem(obj) {
    try {
      return instance.delete(`cart/${obj.id}`);
    } catch (error) {
      console.error(`Ошибка при удалении товара с корзины: ${error}`);
      alert('Ошибка при удалении товара с корзины.');
    }
  },
  delFavoriteItem(obj) {
    try {
      return instance.delete(`favorites/${obj.id}`);
    } catch (error) {
      console.error(`Ошибка при удалении с товара с моих закладок: ${error}`);
      alert('Ошибка при удалении с товара с моих закладок.');
    }
  },
  confirmOrder(items) {
    try {
      return instance.post(`orders`, {
        items: items,
      });
    } catch (error) {
      console.error(`Ошибка при создании заказа: ${error}`);
      alert('Ошибка при создании заказа.');
    }
  },
  clearCart(items) {
    try {
      items.forEach((item, index) => {
        setTimeout(() => {
          instance.delete('cart/' + item.id);
        }, 1000 * ++index);
      });
    } catch (error) {
      console.error(`Ошибка при массовом удалении товаров с корзины: ${error}`);
      alert('Ошибка при массовом удалении товаров с корзины.');
    }
  },
};