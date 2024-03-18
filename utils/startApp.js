import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
// import { getOrders } from '../api/orderData';
import navBar from '../components/shared/navBar';
import clearDom from './clearDom';
import navigationEvents from '../events/navigationEvents';
<<<<<<< HEAD
import { showAllOrders } from '../pages/orders';
import { showAllItems } from '../pages/items';
import { getItems } from '../api/itemData';
=======
import homePageButtons from '../components/buttons/homePageButtons';
import domEvents from '../events/domEvents';
>>>>>>> ada83791257fab5bdeb36f626c41adac0b76dfab

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  navBar();
  logoutButton(uid); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents();
<<<<<<< HEAD
  showAllItems(uid);

=======
  homePageButtons();
  domEvents(uid);
>>>>>>> ada83791257fab5bdeb36f626c41adac0b76dfab
  clearDom();

  // TODO: Put all orders on the DOM on App load
<<<<<<< HEAD
  getOrders(uid).then((orders) => showAllOrders(orders));
  getItems(uid).then((items) => showAllItems(items));
=======
  // getOrders(uid).then((orders) => showAllOrders(orders));
>>>>>>> ada83791257fab5bdeb36f626c41adac0b76dfab
};
export default startApp;
