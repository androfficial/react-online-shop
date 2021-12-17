/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6149bb1b07549f001755a547.mockapi.io/',
});

const globalAPI = {
  async getItems(page = 1) {
    try {
      const { data } = await instance.get(`items?page=${page}&limit=12`);

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Unsuccessful attempt to receive goods: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  async getCartItems() {
    try {
      const { data } = await instance.get('cart');

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Error while receiving items in the cart: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  async getFavoriteItems() {
    try {
      const { data } = await instance.get('favorites');

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Error getting my favorites: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  async getOrders() {
    try {
      const { data } = await instance.get('orders');

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Error while getting the list of orders: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  async addCartItem(obj) {
    try {
      const { data } = await instance.post('cart', obj);

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Error while adding item to cart: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  async addFavoriteItem(obj) {
    try {
      const { data } = await instance.post('favorites', obj);

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Error adding a product to favorites: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  delCartItem(obj) {
    try {
      return instance.delete(`cart/${obj.id}`);
    } catch (error) {
      console.error(`Error while deleting an item from the cart: ${error}`);
      return null;
    }
  },
  delFavoriteItem(obj) {
    try {
      return instance.delete(`favorites/${obj.id}`);
    } catch (error) {
      console.error(
        `Error while deleting from an item from my bookmarks: ${error}`
      );
      return null;
    }
  },
  async confirmOrder(items) {
    try {
      const { data } = await instance.post(`orders`, {
        items,
      });

      return data;
    } catch (error) {
      if (error.response) {
        console.error(
          `Error while creating order: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  clearCart(items) {
    try {
      items.forEach((item, index) => {
        setTimeout(() => {
          instance.delete(`cart/${item.id}`);
        }, 1000 * ++index);
      });
    } catch (error) {
      console.error(`Error while bulk deleting items from the cart: ${error}`);
    }
  },
};

export default globalAPI;
