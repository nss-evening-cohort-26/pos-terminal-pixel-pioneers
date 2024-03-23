// import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import { getItems } from '../../api/itemData';

// this form will add a new item or update an item based on it's firebaseKey
const selectItem = (itemName, uid) => { // setting the default value to empty object; (obj = {}) as a parameter
  // clearDom();
  let domString = ` 
      <label for="item">Select an Item</label>
      <select class="form-control" id="itemName" required>
      <option value=""> Select an Item</option>`;

  getItems(uid).then((itemsArray) => {
    itemsArray.forEach((item) => {
      domString += `
            <option
              value="${item.firebaseKey}"
              ${itemName === item.firebaseKey ? 'selected' : ''}>
                ${itemName}
                </option>`;
    });
    domString += '</select>';
    renderToDOM('#view', domString); // renders above to the DOM based on the div id and what to push HTML wisw
  });
};

export default selectItem;
