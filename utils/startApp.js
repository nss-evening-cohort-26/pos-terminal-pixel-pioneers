import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import { getOrders } from '../api/orderData';
import navBar from '../components/shared/navBar';
import clearDom from './clearDom';
import navigationEvents from '../events/navigationEvents';
import { showAllOrders } from '../pages/orders';
import { showAllItems } from '../pages/items';
import { getItems } from '../api/itemData';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  navBar();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents();
  showAllItems(uid);

  clearDom();
  // TODO: Put all orders on the DOM on App load
  getOrders(uid).then((orders) => showAllOrders(orders));
  getItems(uid).then((items) => showAllItems(items));
};
export default startApp;
