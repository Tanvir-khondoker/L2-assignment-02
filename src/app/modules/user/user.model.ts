import { Schema, model  } from 'mongoose';
import { IUser,  IFullName, IAddress } from './user.interface';

const ordersSchema = new Schema({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const fullNameSchema = new Schema<IFullName>({
  firstName: { type: String },
  lastName: { type: String },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

// user schema here 
const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String] },
  address: { type: addressSchema, required: true },
  orders: { type: [ordersSchema] },
});


// model here 

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
