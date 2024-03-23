import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showRevenue = () => {
  clearDom();
  let domString = '';
  domString += `
  <div>
    <div class="revenue-title"><h1>Revenue</h1></div>
    <div class="rev-total"><h1>Total Revenue</h1></div>
    <div class="revenue-date"><h4>Date Range: </h4></div>
    <div class="revenue-totals">
      <h4>TOTAL TIPS</h4>
      <h4>TOTAL CALL-IN ORDERS: </h4>
      <h4>TOTAL WALK-INS ORDERS: </h4>
    </div>
    <div class="revenue-pay-types">
      <h4>Cash - </h4>
      <h4>Mobile - </h4>
      <h4>Credit - </h4>
      <h4>Debit - </h4>
      <h4>Check - </h4>
    </div>

  </div>`;
  renderToDom('#view', domString);
};
export default showRevenue;
