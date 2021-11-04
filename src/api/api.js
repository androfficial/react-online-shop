import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6149bb1b07549f001755a547.mockapi.io/',
});

export const globalAPI = {
  getItems(page = 1) {
    try {
      return instance.get(`items?page=${page}&limit=12`);
    } catch (error) {
      console.error(`Ошибка при получении товаров: ${error}`);
    }
  },
  getCartItems() {
    try {
      return instance.get('cart');
    } catch (error) {
      console.error(`Ошибка при получении товаров в корзине: ${error}`);
    }
  },
  getFavoriteItems() {
    try {
      return instance.get('favorites');
    } catch (error) {
      console.error(`Ошибка при получении моих закладок: ${error}`);
    }
  },
  getOrders() {
    try {
      return instance.get('orders');
    } catch (error) {
      console.error(`Ошибка при получении списка заказов: ${error}`);
    }
  },
  addCartItem(obj) {
    try {
      return instance.post('cart', obj);
    } catch (error) {
      console.error(`Ошибка при добавлении товара в корзину: ${error}`);
    }
  },
  addFavoriteItem(obj) {
    try {
      return instance.post('favorites', obj);
    } catch (error) {
      console.error(`Ошибка при добавлении товара в избранное: ${error}`);
    }
  },
  delCartItem(obj) {
    try {
      return instance.delete(`cart/${obj.id}`);
    } catch (error) {
      console.error(`Ошибка при удалении товара с корзины: ${error}`);
    }
  },
  delFavoriteItem(obj) {
    try {
      return instance.delete(`favorites/${obj.id}`);
    } catch (error) {
      console.error(`Ошибка при удалении с товара с моих закладок: ${error}`);
    }
  },
  confirmOrder(items) {
    try {
      return instance.post(`orders`, {
        items: items,
      });
    } catch (error) {
      console.error(`Ошибка при создании заказа: ${error}`);
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
    }
  },
};