const clearDom = () => {
  console.warn();
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#home-container').innerHTML = '';
  document.querySelector('#order-cards').innerHTML = '';
};

export default clearDom;
