import { getSingleOrder, deleteOrder } from './orderData';
import { getSingleItems, getItemsOrder, deleteItem } from './itemData';

// TODO: Get data for viewBook
const getOrderDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const ordersObject = await getSingleOrder(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
  const itemsObject = await getSingleItems(ordersObject.orderID); // this function uses the data response from the bookObject

  return { ...itemsObject, ordersObject };
};

const deleteItemOrdersRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItemsOrder(firebaseKey).then((itemOrdersArray) => {
    const deleteOrderPromises = itemOrdersArray.map((orders) => deleteOrder(orders.firebaseKey));

    Promise.all(deleteOrderPromises).then(() => {
      deleteItem(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

const getItemDetails = async (firebaseKey) => {
  const itemsObject = await getSingleItems(firebaseKey);
  const itemOrders = await getItemsOrder(firebaseKey);
  return { ...itemsObject, orders: itemOrders };
};

export {
  getOrderDetails,
  deleteItemOrdersRelationship,
  getItemDetails
};
