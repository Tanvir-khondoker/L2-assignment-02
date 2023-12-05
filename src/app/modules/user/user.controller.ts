import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userNameValidationSchema from './user.validation';


const createUser = async (req: Request, res: Response) => {
  try {
    const  userData  = req.body;

    // data validation using zod
    const zodParsedData = userNameValidationSchema.parse(userData);

    const result = await UserServices.createUserIntoDB(zodParsedData);

    // send response
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};



const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserServices.getSingleUserFromDB(parseInt(userId));
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedUserData = req.body.user;

    const zodParsedData = userNameValidationSchema.parse(updatedUserData);

    const result = await UserServices.updateUserInDB(
      parseInt(userId),
      zodParsedData,
    );

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const existingUser = await UserServices.getSingleUserFromDB(
      parseInt(userId),
    );

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
    }

    // Delete the user
    await UserServices.deleteUserFromDB(parseInt(userId));

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      data: null,
    });
  }
};

const addOrderToUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const orderData = req.body;

    await UserServices.addOrderToUserInDB(parseInt(userId), orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (err) {
    console.error(err);
  }
};

const getAllOrdersForUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const orders = await UserServices.getAllOrdersForUserFromDB(
      parseInt(userId),
    );

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: { orders },
    });
  } catch (err) {
    console.log(err);
  }
};

const calculateTotalPriceForUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const totalPrice = await UserServices.calculateTotalPriceForUserFromDB(
      parseInt(userId),
    );

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: { totalPrice },
    });
  } catch (err) {
    console.log(err);
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  updateUser,
  deleteUser,
  addOrderToUser,
  getAllOrdersForUser,
  calculateTotalPriceForUser
};
