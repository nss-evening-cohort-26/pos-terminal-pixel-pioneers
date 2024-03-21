// PROMISE FOR ORDER DETAILS
// DELETE ORDER AND ITEM RELATIONSHIP
import { getSingleOrder, getOrderItems } from './orderData';

// Get data for viewAuthor
const getOrderDetails = async (firebaseKey) => {
  const orderObject = await getSingleOrder(firebaseKey);
  const orderItems = await getOrderItems(firebaseKey);
  return { ...orderObject, items: orderItems };
};

export default getOrderDetails;
