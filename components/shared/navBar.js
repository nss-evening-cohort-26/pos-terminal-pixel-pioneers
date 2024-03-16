import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  console.warn('NavBar');
  const domString = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand title" href="#" id="logo">Hip Hop, Pizza & Wangs Pizzeria</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
             <a class="nav-link" href="#" id="view-orders">
               View Order <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
             <a class="nav-link" href="#" id="create-order">
               Create Order <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
      </div>
    </nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
