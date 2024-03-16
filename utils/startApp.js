import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';

const startApp = (uid) => {
  domBuilder();
  logoutButton();
  console.warn(uid);
};
export default startApp;
