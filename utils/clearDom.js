const clearDom = (id = 0) => {
  console.warn();
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  if (id === 3) { document.querySelector('#home-container').innerHTML = ''; }
};

export default clearDom;
