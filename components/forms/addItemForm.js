import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import selectItem from './selectItem';

const addItemForm = (uid, obj = {}) => { // setting the default value to empty object; (obj = {}) as a parameter
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div id="select-item"></div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Item' : 'Submit Item'}</button>
    </form>`;
  // this is the form to add an item, obj.word pulls dynamically from the api call to add an item to the database
  // ternary on line 7 & 16 changes button text pending if there is a firebasekey associated with the api call
  renderToDom('#form-container', domString); // renders above to the DOM based on the div id and what to push HTML wisw
  selectItem(uid, `${obj.itemName || ''}`);
  console.warn(obj.itemName, 'itemName');
};
export default addItemForm;
