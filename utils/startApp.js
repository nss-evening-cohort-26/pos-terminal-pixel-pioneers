import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/loginButton';
import viewOrder from '../pages/viewOrder';
import { getOrders } from '../api/orderData';

const startApp = (uid) => {
  // console.warn(startApp);
  domBuilder(uid);
  viewOrder(uid);
  logoutButton(uid);

  getOrders(uid).then((orders) => viewOrder(orders));
};
export default startApp;
