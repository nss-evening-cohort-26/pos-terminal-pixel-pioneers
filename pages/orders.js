import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDom('#view', domString);
};

const showAllOrders = (getOrders) => {
  clearDom();

  let domString = '';
  getOrders.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.customerPhone}</h6>
        <h6 class="card-subtitle mb-2 text-muted">${item.customerEmail}</h6> 
        <h6 class="card-subtitle mb-2 text-muted">Status: ${item.isOpen}</h6>  
        <hr>
        <p class="card-text">${item.orderType}</p>
        <i class="btn btn-success" id="view-order-btn--${item.firebaseKey}"><span class="fas fa-eye"></span></i>
        <i class="btn btn-info" id="update-order--${item.firebaseKey}"><span class="fas fa-edit"></span></i>
        <i class="btn btn-danger" id="delete-order-btn--${item.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
      </div>
    </div>
    `;
  });
  renderToDom('#view', domString);
};

export { showAllOrders, emptyOrders };
