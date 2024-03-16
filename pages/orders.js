import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDom('#store', domString);
};

const showAllOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.customerPhone}</h6>
        <h6 class="card-text"${item.customerEmail}></h6>   
        <hr>
        <p class="card-text">${item.orderType}</p>
        <i class="btn btn-success" id="view-author-btn--${item.firebaseKey}"><span class="fas fa-eye"></span></i>
        <i class="btn btn-info" id="update-author--${item.firebaseKey}"><span class="fas fa-edit"></span></i>
        <i class="btn btn-danger" id="delete-author-btn--${item.firebaseKey}"><span class="fas fa-trash-alt"></span></i>
      </div>
    </div>
    `;
  });
  renderToDom('#store', domString);
};

export default { showAllOrders, emptyOrders };
