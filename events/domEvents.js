import { getOrders } from '../api/orderData';
import { showAllOrders } from '../pages/orders';
import clearDom from '../utils/clearDom';
import { deleteItem, getItems, getSingleItems } from '../api/itemData';
import { showAllItems } from '../pages/items';
// import addOrderForm from '../components/forms/addOrderForm';
import addItemForm from '../components/forms/addItemForm';

const domEvents = (uid) => {
  document.querySelector('#home-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-btn')) {
      getOrders(uid).then((orders) => showAllOrders(orders));
      // console.warn(e.target.id);
      clearDom(3);
    }
  });
};

const buttonEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn--')) {
      getItems(uid).then((items) => showAllItems(items));
    }

    if (e.target.id.includes('update-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('item edit click');

      getSingleItems(firebaseKey).then((itemObj) => addItemForm(itemObj, uid));
    }

    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this item from this order?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteItem(firebaseKey).then(() => {
          getItems(uid).then(showAllItems);
        });
      }
    }
  });
};
export { domEvents, buttonEvents };
