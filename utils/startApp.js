import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  // TODO: Put all orders on the DOM on App load
};
export default startApp;
