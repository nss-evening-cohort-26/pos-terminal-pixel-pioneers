// ALL PROMISES FOR ORDERS
import client from '../utils/client';

const endpoint = client.databaseURL;

// get all revenue
const getTotalRevenue = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json/?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// get Single Revenue
const getSingleRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export { getTotalRevenue, getSingleRevenue };
