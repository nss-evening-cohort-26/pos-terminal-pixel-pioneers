import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewOrder = (obj) => {
  clearDom();

  const domString = `
   <div class="card" style="width: 18rem; margin-bottom: 10px;">
       <div class="card-body">
         <h5 class="order-name">${obj.name}</h5>
         <p class="card-subtitle mb-2 text-muted">${obj.isOpen}</p>
         <p class="card-subtitle mb-2 text-muted">${obj.customerPhone}</p>
         <p class="card-subtitle mb-2 text-muted">${obj.customerEmail}</p>
         <p class="card-subtitle mb-2 text-muted">${obj.orderType}</p>
         <hr>
         <div style="margin-bottom: 15px;">
         </div>
         <i class="btn btn-success" id="view-details-btn--${obj.firebaseKey}"><span class="fas fa-eye"></span></i>
         <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"><span class="fas fa-edit"></span></i>
         <i id="delete-order-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"><span class="fas fa-trash-alt"></span></i>
       </div>
     </div>
   `;
  renderToDom('#view', domString);
};
export default viewOrder;
