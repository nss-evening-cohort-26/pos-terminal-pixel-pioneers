import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#view', domString);
};

const showAllItems = (getItems) => {
  console.warn('showAllItems', getItems);
  clearDom();

  let domString = '';
  getItems.forEach((obj) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${obj.itemPrice}</h6>
          <hr>
          <i class="btn btn-info" id="update-item--${obj.firebaseKey}"><span class="fas fa-edit"></span></i>
          <i class="btn btn-danger" id="delete-item-btn--${obj.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
        </div>
      </div>
      `;
  });
  renderToDom('#view', domString);
};

export { showAllItems, emptyItems };
