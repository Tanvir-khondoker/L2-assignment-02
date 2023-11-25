import { IOrders, IUser } from './user.interface';
import UserModel from './user.model';

const createUserIntoDB = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

const updateUserInDB = async (userId: number, updatedData: Partial<IUser>) => {
  const result = await UserModel.findOneAndUpdate({ userId }, updatedData, {
    new: true,
  });
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  const result = await UserModel.findOneAndDelete({ userId });
  return result;
};

const addOrderToUserInDB = async (userId: number, orderData: IOrders) => {
  const user = await UserModel.findOneAndUpdate(
    { userId },
    { $push: { orders: orderData } },
    { new: true },
  );

  if (!user) {
    throw new Error('User not found!');
  }

  return null;
};


const getAllOrdersForUserFromDB = async (userId: number) => {
  const user = await UserModel.findOne({ userId });

  if (!user) {
    throw new Error('User not found!');
  }

  return user.orders || [];
};

const calculateTotalPriceForUserFromDB = async (userId: number) => {
  const user = await UserModel.findOne({ userId });

  if (!user) {
    throw { code: 404, description: 'User not found!' };
  }

  const orders = user.orders || [];
  const totalPrice = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

  return totalPrice;
};


export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
  addOrderToUserInDB,
  getAllOrdersForUserFromDB,
  calculateTotalPriceForUserFromDB
};
