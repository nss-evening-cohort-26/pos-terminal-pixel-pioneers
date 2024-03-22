import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewOrder = (obj) => {
  clearDom();

  let domString = '';

  obj.items.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.itemName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.itemPrice}</h6>
        <hr>
        <i class="btn btn-info" id="update-item-btn--${item.firebaseKey}"><span class="fas fa-edit"></span></i>
        <i class="btn btn-danger" id="delete-item-btn--${item.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
      </div>
    </div>`;
  });

  domString += `<div>
  <button id="add-item-btn" class="btn-home btn-danger">Add Item</button><button id="go-to-payment-btn" class="btn-home btn-danger">Go To Payment</button></div>`;

  renderToDom('#order-cards', domString);
};
export default viewOrder;
