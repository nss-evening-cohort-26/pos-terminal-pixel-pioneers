import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import selectOrder from './selectItem';

// this form will add a new item or update an item based on it's firebaseKey
const addItemForm = (obj = {}, uid) => { // setting the default value to empty object; (obj = {}) as a parameter
  clearDom();
  const domString = ` 
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="image">Item Name</label>
        <input type="text" class="form-control" id="item_name" placeholder="Item Name" value="${obj.itemName || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Item Price</label>
        <input type="number" min="0.00" max="10000.00" class="form-control" id="item_price" placeholder="Item Price" value="${obj.itemPrice || ''}"required>
      </div>
      </div>
      <div class="form-group" id="select-order">
      </div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Item' : 'Submit Item'}</button>
    </form>`;
  // this is the form to add an item, obj.word pulls dynamically from the api call to add an item to the database
  // ternary on line 7 & 16 changes button text pending if there is a firebasekey associated with the api call
  renderToDom('#form-container', domString); // renders above to the DOM based on the div id and what to push HTML wisw
  selectOrder(`${obj.orderID || ''}`, uid);
};

export default addItemForm;
