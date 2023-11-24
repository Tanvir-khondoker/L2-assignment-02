import { IUser } from './user.interface';
import UserModel from './user.model';

const createUserIntoDB = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async()=>{
const result = await UserModel.find()
return result;
}

const getSingleUserFromDB = async(userId:number)=>{
    const result = await UserModel.findOne({userId})
    return result;
    }


export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB
};
