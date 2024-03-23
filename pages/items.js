import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#view', domString);
};

const showAllItems = (array) => {
  clearDom();
  console.warn(array);
  const total = array.reduce((totalPrice, item) => totalPrice + parseFloat(item.itemPrice), 0);

  let domString = `<div><h1>Total: $${Number((total).toFixed(2))} </h1></div>`;
  array.forEach((obj) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.itemName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">$${obj.itemPrice}</h6>
          <hr>
          <i class="btn btn-info" id="update-item-btn--${obj.firebaseKey}"><span class="fas fa-edit"></span></i>
          <i class="btn btn-danger" id="delete-item-btn--${obj.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
        </div>
      </div>
      `;
  });
  domString += `<div>
  <button id="add-item-btn" class="btn-home btn-danger">Add Item</button><button id="go-to-payment-btn" class="btn-home btn-danger">Go To Payment</button></div>`;
  renderToDom('#view', domString);
};

export { showAllItems, emptyItems };
