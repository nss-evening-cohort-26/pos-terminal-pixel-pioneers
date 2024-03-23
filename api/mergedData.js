import { getSingleItems, deleteItem, getItemsOrder } from './itemData';
import { getSingleOrder, deleteOrder } from './orderData';

// TODO: Get data for viewBook
const getItemDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const ordersObject = await getSingleOrder(firebaseKey); // this function uses the data response from the bookObject
  console.warn('firebasekey', firebaseKey);
  const itemsObject = await getSingleItems(ordersObject.orderID); // await stops thecode in this function and waits for the response. This is like using .then
  console.warn('orderId', itemsObject);

  return { ...ordersObject, itemsObject };
};

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItemsOrder(firebaseKey).then((orderItemsArray) => {
    const deleteItemsPromises = orderItemsArray.map((items) => deleteItem(items.firebaseKey));

    Promise.all(deleteItemsPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

const getOrdersDetails = async (firebaseKey) => {
  const ordersObject = await getSingleOrder(firebaseKey);
  const orderItems = await getItemsOrder(firebaseKey);
  return { ...ordersObject, items: orderItems };
};
export {
  getItemDetails,
  deleteOrderItemsRelationship,
  getOrdersDetails,
};
