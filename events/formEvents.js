// import {
// createNewItems, getItems, getItemsOrder, updateItem
// } from '../api/itemData';
// import { getItemDetails } from '../api/mergedData';
import {
  createNewOrder, getOrders, updateOrder
} from '../api/orderData';
// import { showAllItems } from '../pages/items';
import { showAllOrders } from '../pages/orders';
// import viewItem from '../pages/viewItem';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // CLICK EVENT FOR SUBMITTING NEW ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#order-phone').value,
        customerEmail: document.querySelector('#order-email').value,
        orderType: document.querySelector('#types-of-orders').value,
        uid,
      };

      createNewOrder(payload).then(({ firebaseKey }) => {
        updateOrder(firebaseKey).then(() => {
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
