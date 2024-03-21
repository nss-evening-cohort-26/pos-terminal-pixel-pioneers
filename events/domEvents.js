import { deleteOrder, getOrders, getSingleOrder } from '../api/orderData';
import { showAllOrders } from '../pages/orders';
// import clearDom from '../utils/clearDom';
// import { showAllItems } from '../pages/items';
import addOrderForm from '../components/forms/addOrderForm';
import { deleteItem, getItems, getSingleItems } from '../api/itemData';
import { showAllItems } from '../pages/items';
import addItemForm from '../components/forms/addItemForm';
import closeOrderForm from '../components/forms/closeOrderForm';
import showOrderItems from '../api/showOrderItems';

const domEvents = (uid) => {
  document.querySelector('#home-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-btn')) {
      getOrders(uid).then((orders) => showAllOrders(orders));
      // console.warn(e.target.id);
      // clearDom(3);
    }
    // CLICK EVENT FOR CREATE ORDER FORM WELCOME BUTTON
    if (e.target.id.includes('create-btn')) {
      addOrderForm({}, uid);
    }
  });
};
const buttonEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR VIEW ORDER DETAILS
    if (e.target.id.includes('view-order-btn--')) {
      getItems(uid).then((items) => showOrderItems(items));
    }

    // CLICK EVENT FOR DELETING A ORDER
    if (e.target.id.includes('delete-order-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrders(uid).then(showAllOrders);
        });
      }
    }

    // CLICK EVENT FOR DELETING A ITEM
    if (e.target.id.includes('delete-item-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteItem(firebaseKey).then(() => {
          getItems(uid).then(showAllItems);
        });
      }
    }
    // CLICK EVENT FOR UPDATING A ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItems(firebaseKey).then((itemObject) => addItemForm(itemObject, uid));
    }
    // CLICK EVENT FOR UPDATING A ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObject) => addOrderForm(orderObject, uid));
    }
    if (e.target.id.includes('go-to-payment-btn')) {
      console.warn('button clicked');
      closeOrderForm({}, uid);
    }
    if (e.target.id.includes('add-item-btn')) {
      addItemForm({}, uid);
    }
  });
};

export { domEvents, buttonEvents };
