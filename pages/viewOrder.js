// const viewOrder = (obj) => {
//   clearDom();

//   const domString = `
//   <div class="card" style="width: 18rem; margin-bottom: 10px;">
//       <div class="card-body">
//         <h5 class="card-title">${obj.title}</h5>
//         <h6 class="card-subtitle mb-2 text-muted">${obj.language_id}</h6>
//           <p class="card-text bold">${obj.definition}</p>
//             <p>${obj.timeSubmitted}</p>
//         <hr>
//         <div style="margin-bottom: 15px;">
//         </div>
//         <i class="fas fa-edit btn btn-info" id="update-vocab--${obj.firebaseKey}"></i>
//         <i class="btn btn-danger fas fa-trash-alt" id="delete-vocab-btn--${obj.firebaseKey}"></i>
//       </div>
//     </div>
//   `;
//   renderToDOM('#vocab-cards', domString);
// };
