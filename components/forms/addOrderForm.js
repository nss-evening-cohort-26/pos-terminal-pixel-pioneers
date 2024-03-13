// Form to add vocab card
// import clearDom from '../../utils/clearDom';
// import renderToDOM from '../../utils/renderToDom';
// import selectLanguage from './selectLanguage';

// // USING THIS FORM FOR BOTH CREATE AND UPDATE
// const addVocabForm = (obj = {}, uid) => {
//   clearDom();
//   const domString = `
//     <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
//       <div class="form-group">
//         <label for="title">Vocab Title</label>
//         <input type="text" class="form-control" id="vocab-title" aria-describedby="vocabTitle" placeholder="Enter Vocab Title" value="${obj.title || ''}" required>
//       </div>
//       <div class="form-group">
//         <label for="description">Definition</label>
//         <textarea class="form-control" placeholder="Vocab Definition" id="vocab-definition" style="height: 100px">${obj.definition || ''}</textarea>
//       </div>
//       <div class="form-group" id="select-language"></div>
//       <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Vocab' : 'Submit Form'}</button>
//     </form>`;

//   renderToDOM('#form-container', domString);
//   selectLanguage(`${obj.language_id || ''}`, uid);
// };

// export default addVocabForm;
