// import { getOrders, deleteOrders, getSingleOrder } from '../api/orderData';
// import { viewOrder } from '../pages/viewOrder';
// // import addBookForm from '../components/forms/addBookForm';
// import { getItem, getSingleItem } from '../api/itemData';
// import { showAllItems } from '../pages/items';
// // import addItemForm from '../components/forms/addAuthorForm';
// // import { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship } from '../api/mergedData';
// // import viewOrder from '../pages/viewBook';
// // import viewAuthors from '../pages/viewAuthor';

// const domEvents = (uid) => {
   // document.querySelector('#main-container').addEventListener('click', (e) => {
//     // TODO: CLICK EVENT FOR DELETING A order
//     if (e.target.id.includes('delete-book')) {
//       // eslint-disable-next-line no-alert
//       if (window.confirm('Want to delete?')) {
//         console.warn('CLICKED DELETE BOOK', e.target.id);
//         const [, firebaseKey] = e.target.id.split('--');

//         deleteBook(firebaseKey).then(() => {
//           getBooks(uid).then(showBooks);
//         });
//       }
//     }

//     // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
//     if (e.target.id.includes('add-book-btn')) {
//       addBookForm(uid);
//     }

//     // TODO: CLICK EVENT EDITING/UPDATING A BOOK
//     if (e.target.id.includes('edit-book-btn')) {
//       const [, firebaseKey] = e.target.id.split('--');

//       getSingleBook(firebaseKey).then((bookObj) => addBookForm(uid, bookObj));
//     }
//     // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
//     if (e.target.id.includes('view-book-btn')) {
//       console.warn('VIEW BOOK', e.target.id);
//       const [, firebaseKey] = e.target.id.split('--');

//       getBookDetails(firebaseKey).then(viewBook);
//     }

//     // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
//     if (e.target.id.includes('delete-author-btn')) {
//       // eslint-disable-next-line no-alert
//       if (window.confirm('Want to delete?')) {
//         console.warn('DELETE AUTHOR', e.target.id);
//         const [, firebaseKey] = e.target.id.split('--');

//         deleteAuthorBooksRelationship(firebaseKey).then(() => {
//           getAuthors(uid).then(showAuthors);
//         });
//       }
//     }

//     // CLICK EVENT FOR VIEW AUTHOR DETAILS
//     if (e.target.id.includes('view-author-btn')) {
//       console.warn('VIEW AUTHOR', e.target.id);
//       const [, firebaseKey] = e.target.id.split('--');
//       // getAuthorDetails(firebaseKey).then(viewAuthor);
//       getAuthorDetails(firebaseKey).then(viewItem);
//     }

//     // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
//     if (e.target.id.includes('add-author-btn')) {
//       addAuthorForm();
//     }
//     // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
//     if (e.target.id.includes('update-author')) {
//       const [, firebaseKey] = e.target.id.split('--');
//       getSingleItem(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
//     }
//   });
// };

// export default domEvents;
