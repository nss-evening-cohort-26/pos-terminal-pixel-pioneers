// import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import { getItems } from '../../api/itemData';

// this form will add a new item or update an item based on it's firebaseKey
const selectItem = (itemName, uid) => { // setting the default value to empty object; (obj = {}) as a parameter
  // clearDom();
  let domString = '<select id="select-item">';
  // getLanguage(uid).then((languageArray) => {
  //   languageArray.forEach((lang) => {
  //     domString += `
  //     <option value=${lang.firebaseKey}
  //     ${language === lang.firebaseKey ? 'selected' : ''}>${lang.language}</option>`;
  //   });
  //   domString += '</select>';
  //   renderToDOM('#select-language', domString);
  // });
  // };

  getItems(uid).then((itemsArray) => {
    itemsArray.forEach((items) => {
      domString += `
      <option value="${items.firebaseKey}"
      ${itemName === items.firebaseKey ? 'selected' : ''}>${items.itemName}</option>`;
    });
    domString += '</select>';
    renderToDOM('#view', domString); // renders above to the DOM based on the div id and what to push HTML wisw
  });
};

export default selectItem;
