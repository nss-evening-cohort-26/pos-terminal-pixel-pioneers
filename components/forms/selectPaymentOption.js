import { getOrders } from '../../api/orderData';
import renderToDom from '../../utils/renderToDom';

const selectPaymentOption = (orderID) => {
  let domString = `<label for="orders">Select a Payment Type</label>
    <select class="form-control" id="order_id" required>
    <option value="">Select Payment Option</option>`;

  getOrders().then((paymentArray) => {
    paymentArray.forEach((order) => {
      domString += `
          <option 
            value="${order.firebaseKey}" 
            ${orderID === order.firebaseKey ? 'selected' : ''}>
              ${order.name}
          </option>`;
    });

    domString += '</select>';

    renderToDom('#select-author', domString);
  });
};

export default selectPaymentOption;
