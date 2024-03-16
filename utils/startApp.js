import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import viewOrder from '../pages/viewOrder';
import { getOrders } from '../api/orderData';

const startApp = (uid) => {
  domBuilder();
  logoutButton();

  getOrders(uid).then((order) => viewOrder(order));
};
export default startApp;
