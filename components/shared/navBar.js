import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand title" href="#" type="button" id="logo">Hip Hop, Pizza & Wangs Pizzeria</a>
        <button id="logo-btn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
             <button type="button" class="btn btn-outline-dark" id="view-orders">
               View Order 
              </button>
             <button type="button" class="btn btn-outline-dark" id="create-order">
               Create Order
              </button>
        </div>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
      </div>
    </nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
