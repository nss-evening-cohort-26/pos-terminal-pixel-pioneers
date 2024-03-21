import { createNewItems, getItems, updateItem } from '../api/itemData';
import {
  createNewOrder, getOrders, updateOrder
} from '../api/orderData';
import { showAllItems } from '../pages/items';
import { showAllOrders } from '../pages/orders';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // ADD CLICK EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      console.warn('CLICKED SUBMIT ITEM');
      const payload = {
        itemName: document.querySelector('#item_name').value,
        itemPrice: document.querySelector('#item_price').value,
        orderID: document.querySelector('#order_id').value,
        uid,
      };
      createNewItems(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };

        updateItem(patchPayLoad).then(() => {
          getItems(uid).then(showAllItems);
        });
      });
    }

    // ADD CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#item_name').value,
        itemPrice: document.querySelector('#item_price').value,
        orderID: document.querySelector('#order_id').value,
        firebaseKey,
      };
      updateItem(payload).then(() => {
        getItems(uid).then(showAllItems);
      });
    }
    // CLICK EVENT FOR SUBMITTING NEW ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#order-phone').value,
        customerEmail: document.querySelector('#order-email').value,
        orderType: document.querySelector('#types-of-orders').value,
        uid,
      };

      createNewOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(uid).then(showAllOrders);
        });
      });
    }

    // CLICK EVENT FOR EDITING A ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#order-phone').value,
        customerEmail: document.querySelector('#order-email').value,
        orderType: document.querySelector('#types-of-orders').value,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders(uid).then(showAllOrders);
      });
    }
  });
};
export default formEvents;
