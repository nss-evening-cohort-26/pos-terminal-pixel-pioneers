import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import { getOrders } from '../api/orderData';
import viewOrder from '../pages/viewOrder';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  // TODO: Put all orders on the DOM on App load
  getOrders(uid).then((order) => viewOrder(order));
};
export default startApp;
