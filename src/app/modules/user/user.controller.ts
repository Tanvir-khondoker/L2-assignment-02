import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try{
    const {user : userData} = req.body;
  // will call service func to send this data
  const result = await UserServices.createUserIntoDB(userData);
  
   // Exclude the password field from the result
   delete result.password;

  // send response
  res.status(200).json({
    success: true,
    message: 'User created successfully!',
    data: result,
  });
  }catch(err){
    console.log(err);
  }
};


export const userControllers = {
   createUser

}