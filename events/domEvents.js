import renderToDom from '../utils/renderToDom';

const domEvents = () => {
  const domString = `
    <div id="navigation"></div>
    <div id="filter-container"></div>
     <div id="main-container">
       <div id="form-container"></div>
       <div id="order-cards"></div> 
       <div id="view"></div>
     </div>`;
  renderToDom('#app', domString);
};
export default domEvents;
