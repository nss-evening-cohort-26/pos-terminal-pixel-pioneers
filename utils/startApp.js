import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import clearDom from './clearDom';

const startApp = (uid) => {
  domBuilder();
  navBar();
  logoutButton();
  clearDom();
  console.warn(uid);
};
export default startApp;
