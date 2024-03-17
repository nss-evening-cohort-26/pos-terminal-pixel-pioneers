import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addItemForm = (obj = {}) => { // setting the default value to empty object; (obj = {}) as a parameter
  clearDom();
  const domString = ` 
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="item_name" placeholder="Item Price" value="${obj.item_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="item_price" placeholder="Item Price" value="${obj.item_price || ''}"required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Item' : 'Submit Item'}</button>
    </form>`;
  // this is the form to add an item, obj.word pulls dynamically from the api call to add an item to the database
  // ternary on line 7 & 24 changes button text pending if there is a firebasekey associated with the api call
  renderToDOM('#form-container', domString); // renders above to the DOM based on the div id and what to push HTML wise
};

export default addItemForm;
