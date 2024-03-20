import { getOrders } from '../api/orderData';
import { showAllOrders } from '../pages/orders';
import { getItems } from '../api/itemData';
import { showAllItems } from '../pages/items';
import addOrderForm from '../components/forms/addOrderForm';
import { deleteOrderItemsRelationship } from '../api/mergedData';

const domEvents = (uid) => {
  document.querySelector('#home-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-btn')) {
      getOrders(uid).then((orders) => showAllOrders(orders));
      // console.warn(e.target.id);
    }
    if (e.target.id.includes('create-btn')) {
      addOrderForm({}, uid);
    }
  });
};
const buttonEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn--')) {
      getOrders(uid).then((items) => showAllOrders(items));
    }
    // if (e.target.id.includes('delete-order-btn')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     console.warn('CLICKED DELETE ORDER', e.target.id);
    //     const [, firebaseKey] = e.target.id.split('--');

    //     deleteOrder(firebaseKey).then(() => {
    //       getOrders(uid).then(showAllOrders);
    //     });
    //   }
    // }
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE AUTHOR', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getItems(uid).then(showAllItems);
        });
      }
    }
  });
};
export { domEvents, buttonEvents };
