import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import { getOrders } from '../api/orderData';
import navBar from '../components/shared/navBar';
import clearDom from './clearDom';
import navigationEvents from '../events/navigationEvents';
import { showAllOrders } from '../pages/orders';
import { showAllItems } from '../pages/items';
import { getItems } from '../api/itemData';
import domEvents from '../events/domEvents';
import homePageButtons from '../components/buttons/homePageButtons';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  navBar();
  logoutButton(uid); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents();
  showAllItems(uid);
  homePageButtons();
  domEvents(uid);
  clearDom();

  // TODO: Put all orders on the DOM on App load
  getOrders(uid).then((orders) => showAllOrders(orders));
  getItems(uid).then((items) => showAllItems(items));
  // getOrders(uid).then((orders) => showAllOrders(orders));
};
export default startApp;
