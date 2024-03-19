import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
// import { getOrders } from '../api/orderData';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import homePageButtons from '../components/buttons/homePageButtons';
import { domEvents, buttonEvents } from '../events/domEvents';

// import { domEvents, buttonEvents } from '../events/domEvents';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  navBar();
  logoutButton(uid); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents();
  homePageButtons();
  domEvents(uid);
  buttonEvents(uid);

  // TODO: Put all orders on the DOM on App load
  // getOrders(uid).then((orders) => showAllOrders(orders));
  // getItems(uid).then((items) => showAllItems(items));
};
export default startApp;
