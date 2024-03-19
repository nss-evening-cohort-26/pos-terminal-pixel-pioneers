import { deleteOrder, getOrders } from '../api/orderData';
import { showAllOrders } from '../pages/orders';
import { getItems } from '../api/itemData';
import { showAllItems } from '../pages/items';
import addOrderForm from '../components/forms/addOrderForm';
// // import addBookForm from '../components/forms/addBookForm';
// import { getItem, getSingleItem } from '../api/itemData';
// import { showAllItems } from '../pages/items';
// // import addItemForm from '../components/forms/addAuthorForm';
// // import { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship } from '../api/mergedData';
// // import viewOrder from '../pages/viewBook';
// // import viewAuthors from '../pages/viewAuthor';

const domEvents = (uid) => {
  document.querySelector('#home-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-btn')) {
      getOrders(uid).then((orders) => showAllOrders(orders));
      // console.warn(e.target.id);
    }
    if (e.target.id.includes('create-btn')) {
      addOrderForm({}, uid);
    }
  });
};
const buttonEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn--')) {
      getItems(uid).then((items) => showAllItems(items));
    }
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getOrders(uid).then(showAllOrders);
        });
      }
    }
  });
};
export { domEvents, buttonEvents };
