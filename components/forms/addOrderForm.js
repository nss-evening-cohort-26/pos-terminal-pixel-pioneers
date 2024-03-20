// Form to add order
import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
// import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="title">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="vocabTitle" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone">Customer Phone</label>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-123-1234" class="form-control" id="order-phone" value="${obj.customerPhone || ''}" required>
      </div>
      <div class="form-group">
      <label for="description">Customer Email</label>
      <input type="email" class="form-control" id="order-email" value="${obj.customerEmail || ''}" required>
    </div>
    <label for="orders">Order Type:</label>
    <select name="order-type" id="types-of-orders">
      <option value="in-person">In-Person</option>
      <option value="Phone">Phone</option>
    </select>
      <label for="description">Order Type</label></div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Order' : 'Create Order'}</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
