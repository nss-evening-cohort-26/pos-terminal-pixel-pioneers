import { createNewItems, getItems, updateItem } from '../api/itemData';
import {
  createNewOrder, getOrders, getSingleOrder, updateOrder
} from '../api/orderData';
import { showAllItems } from '../pages/items';
import { showAllOrders } from '../pages/orders';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // ADD CLICK EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      console.warn('CLICKED SUBMIT ITEM');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        orderID: document.querySelector('#orderID').value,
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
      console.warn('CLICKED UPDATE ITEM', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        orderID: document.querySelector('#orderID').value,
        firebaseKey,
      };
      updateItem(payload).then(() => {
        getItems(uid).then(showAllItems);
      });
    }
    // CLICK EVENT FOR SUBMITTING NEW ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('CLICKED SUBMIT ORDER', e.target.id);
      const payload = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#customerPhone').value,
        price: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
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
      console.warn('CLICKED UPDATE ORDER', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      const payload = {
        name: document.querySelector('#name').value,
        description: document.querySelector('#customerPhone').value,
        price: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders(uid).then(showAllOrders);
        getSingleOrder(uid);
      });
    }
  });
};
export default formEvents;
