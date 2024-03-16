import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDom('#store', domString);
};

const showAllItems = (array) => {
  console.warn();

  let domString = '';
  array.forEach((obj) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.itemName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.itemPrice}</h6>
        <p class="card-text">${obj.orderType}</p>
        <hr>
        <i class="btn btn-success" id="view-author-btn--${obj.firebaseKey}"><span class="fas fa-eye"></span></i>
        <i class="btn btn-info" id="update-author--${obj.firebaseKey}"><span class="fas fa-edit"></span></i>
        <i class="btn btn-danger" id="delete-author-btn--${obj.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
      </div>
    </div>`;
  });
  renderToDom('#view', domString);
};
export default { showAllItems, emptyOrders };
