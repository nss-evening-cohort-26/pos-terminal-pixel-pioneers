import { getOrders } from '../api/orderData';
import { showAllOrders } from '../pages/orders';
import clearDom from '../utils/clearDom';
import { getItems } from '../api/itemData';
import { showAllItems } from '../pages/items';
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
      clearDom(3);
    }
  });
};

const buttonEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-order-btn--')) {
      getItems(uid).then((items) => showAllItems(items));
    }
  });
};
export { domEvents, buttonEvents };
