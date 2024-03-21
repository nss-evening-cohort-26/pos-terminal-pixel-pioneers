import { getOrders } from '../../api/orderData';
import renderToDom from '../../utils/renderToDom';

const selectOrder = (orderID, uid) => {
  let domString = `<label for="order">Select an Order</label>
    <select class="form-control" id="order_id" required>
    <option value="">Select an Order</option>`;

  getOrders(uid).then((ordersArray) => {
    ordersArray.forEach((orders) => {
      domString += `
          <option 
            value="${orders.firebaseKey}" 
            ${orderID === orders.firebaseKey ? 'selected' : ''}>
              ${orders.name}
          </option>`;
    });

    domString += '</select>';

    renderToDom('#select-order', domString);
  });
};

export default selectOrder;
