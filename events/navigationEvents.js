import { createNewOrder, getOrders } from '../api/orderData';

const navigationEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      console.warn('create order clicked');
      createNewOrder(uid);
    }

    if (e.target.id.includes('view-orders')) {
      console.warn('view orders clicked');
      getOrders(uid);
    }

    // if (e.target.id.includes('logo')) {
    //   console.warn('home screen');
    //   viewHomeScreen(uid);
    // }
  });
};

export default navigationEvents;
