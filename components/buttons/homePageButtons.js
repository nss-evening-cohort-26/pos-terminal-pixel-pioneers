import { getOrders } from '../../api/orderData';
import { showAllOrders } from '../../pages/orders';

const homePageButtons = (uid) => {
  const domString = '<h1></h1><button id="view-btn" class="btn-home btn-danger">View Orders</button><button id="create-btn" class="btn-home btn-danger">Create an Order</button><button id="rev-btn" class="btn-home btn-danger">View Revenue</button>';
  document.querySelector('#home-container').innerHTML = domString;
  document.querySelector('#view-btn').addEventListener('click', () => {
    getOrders(uid).then((orders) => showAllOrders(orders));
    console.warn('Clicked');
  });
};

// // CREATE ORDER BUTTON
// const createButton = () => {
//   const domString = '<button id="create-btn" class="btn btn-danger">Create an Order</button>';
//   document.querySelector('#home-container').innerHTML = domString;
//   // document.querySelector('#google-auth').addEventListener('click', signIn);
// };

// // TOTAL REVENUE BUTTON;
// const revButton = () => {
//   const domString = '<button id="rev-button" class="btn btn-danger">View Revenue</button>';
//   document.querySelector('#home-container').innerHTML = domString;
//   // document.querySelector('#google-auth').addEventListener('click', signIn);
// };
export default homePageButtons;
