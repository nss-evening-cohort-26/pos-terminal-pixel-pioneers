import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';
import homePageButtons from '../components/buttons/homePageButtons';
import { domEvents, buttonEvents } from '../events/domEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  navBar();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents();
  homePageButtons(user);
  domEvents(user.uid);
  buttonEvents(user.uid);
};
export default startApp;
