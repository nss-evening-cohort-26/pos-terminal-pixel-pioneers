import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const closeOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="close-order-btn--${obj.firebaseKey}" class="mb-4">
      <div class="mb-3">
        <label for="payment-type" class="form-label">Payment Type</label>
        <select class="form-select" id="paymentType" required>
          <option value disabled selected hidden>Select a Payment Type</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
          <option value="mobile">Mobile</option>
          <option value="check">Check</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tipAmount">Tip Amount</label>
        <input type="number" min="0.00" max="10000.00" step="0.01" class="form-control" id="tip-amount" required>
      </div>
      <div class="submit-update-btn">
<<<<<<< HEAD
      <button id="close-order-btn" type="submit" class="sub-up-btn btn btn-primary">Close Order</button>
=======
      <button type="submit" class="sub-up-btn btn btn-primary">Close Order</button>
>>>>>>> c20a3c3b2fc6cedffd001d43518e4536804de19d
      </div>
    </form>`;

  renderToDom('#form-container', domString);
};
export default closeOrderForm;
