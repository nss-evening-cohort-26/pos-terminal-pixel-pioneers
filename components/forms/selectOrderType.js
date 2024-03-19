// import { getLanguage } from '../../api/languageData';
// import renderToDOM from '../../utils/renderToDom';

// const selectLanguage = (languageId, uid) => {
//   let domString = `<label for="author">Select a Language</label>
//     <select class="form-control" id="language_id" required>
//     <option value="">Select a Language</option>`;

//   getLanguage(uid).then((langArray) => {
//     langArray.forEach((language) => {
//       domString += `
//           <option
//             value="${language.firebaseKey}"
//             ${languageId === language.firebaseKey ? 'selected' : ''}>
//               ${language.language_name}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-language', domString);
//   });
// };

// export default selectLanguage;
