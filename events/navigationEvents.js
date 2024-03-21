import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showAllOrders } from '../pages/orders';

const navigationEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      console.warn('create order clicked');
      addOrderForm(uid);
    }

    if (e.target.id.includes('view-orders')) {
      console.warn('view orders clicked');
      getOrders(uid).then(showAllOrders);
    }

    // if (e.target.id.includes('logo')) {
    // console.warn('home screen');
    // viewHomeScreen(uid);
    // }
  });
};

export default navigationEvents;
