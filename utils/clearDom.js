const clearDom = () => {
  console.warn();
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#home-container').innerHTML = '';
};

export default clearDom;
