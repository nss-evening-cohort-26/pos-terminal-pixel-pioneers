const renderToDom = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
  // console.warn(content);

};

export default renderToDom;
