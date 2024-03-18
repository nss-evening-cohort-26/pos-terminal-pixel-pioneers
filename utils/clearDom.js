const clearDom = (id = 0) => {
  console.warn();
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
<<<<<<< HEAD
  document.querySelector('#order-cards').innerHTML = '';
=======
  if (id === 3) { document.querySelector('#home-container').innerHTML = ''; }
>>>>>>> ada83791257fab5bdeb36f626c41adac0b76dfab
};

export default clearDom;
