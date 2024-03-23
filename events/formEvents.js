import {
  createNewItems, getItems, getItemsOrder, updateItem
} from '../api/itemData';
// import { getItemDetails } from '../api/mergedData';
import {
  createNewOrder, getOrders, updateOrder
} from '../api/orderData';
import { showAllItems } from '../pages/items';
import { showAllOrders } from '../pages/orders';
// import { getOrderDetails } from '../api/mergedData';

// may need to update the imports based on where viewRevenue, createRevenue and updateRevenue are placed :)

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // ADD CLICK EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED SUBMIT ITEM');
      const payload = {
        itemName: document.querySelector('#item_name').value,
        itemPrice: document.querySelector('#item_price').value,
        orderID: document.querySelector('#order_id').value,
        firebaseKey,
        uid
      };
      console.warn();
      createNewItems(payload).then(() => {
        getItemsOrder(uid).then(showAllItems);
      });
    }

    // ADD CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#item_name').value,
        itemPrice: document.querySelector('#item_price').value,
        firebaseKey,
      };
      updateItem(payload).then(() => {
        getItems(uid).then(showAllItems);
      });
    }
    // CLICK EVENT FOR SUBMITTING NEW ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#order-phone').value,
        customerEmail: document.querySelector('#order-email').value,
        orderType: document.querySelector('#types-of-orders').value,
        uid,
      };

      createNewOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(uid).then(showAllOrders);
        });
      });
    }

    // CLICK EVENT FOR EDITING A ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#order-phone').value,
        customerEmail: document.querySelector('#order-email').value,
        orderType: document.querySelector('#types-of-orders').value,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders(uid).then(showAllOrders);
      });
    }

    // if (e.target.id.includes('close-order-btn')) {
    //   const [, orderFirebaseKey] = e.target.id.split('--');
    //   // gets order details merged data call, based on the orders firebaseKey
    //   getOrderDetails(orderFirebaseKey).then((order) => {
    //     // makes tip amount
    //     const tip = Number(document.querySelector('#tip-amount').value);
    //     const payload = {
    //       total: (order.items.reduce((total, item) => total + Number(item.itemPrice), 0) + tip).toFixed(2),
    //       dateClose: Date.now(),
    //       orderType: order.orderType,
    //       orderID: order.orderID,
    //       paymentType: document.querySelector('paymentType').value,
    //       uid,
    //     };
    // createRevenue(payload).then(({ name }) => {
    //   // creates a revenue firebaseKey
    //   const revenuePatchPayload = { firebaseKey: name };
    //   updateRevenue(revenuePatchPayload);
    //   // should change the order status to false; based on firebaseKey (I think?)
    //   const orderPatchPayload = { isOpen: !true, firebaseKey: orderFirebaseKey };
    //   updateOrder(orderPatchPayload).then(
    //     // I think this should go directly to the revenue page? But I'm okay if it goes back to the viewOrders page also; doesn't matter to me.
    //     getOrderDetails(orderFirebaseKey).then(viewRevenuePage)
    //   );
    // });
    // });
    // }
  });
};

export default formEvents;
