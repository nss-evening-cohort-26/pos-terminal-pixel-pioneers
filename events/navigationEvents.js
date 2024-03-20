// import { getItems } from '../api/itemData';
import { createNewOrder } from '../api/orderData';
import { showAllOrders } from '../pages/orders';

const navigationEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      createNewOrder(uid);
    }

    if (e.target.id.includes('view-orders')) {
      showAllOrders(uid);
    }

    // if (e.target.id.includes('logo')) {
    //   console.warn('home screen');
    //   viewHomeScreen(uid);
    // }
  });
};

export default navigationEvents;
