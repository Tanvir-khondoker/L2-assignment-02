import { Schema, model } from 'mongoose';
import { IUser, IFullName, IAddress } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const ordersSchema = new Schema({
  productName: String,
  price: Number,
  quantity: Number,
});

const fullNameSchema = new Schema<IFullName>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<IAddress>({
  street: String,
  city: String,
  country: String,
});

// user schema here
const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: true,
    unique: true,
    message: 'User with this userId already exists.',
  },
  username: {
    type: String,
    required: true,
    unique: true,
    message: 'This username is already in use. Please choose a different one.',
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: fullNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    message: 'This email is already in use. Please choose a different one.',
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: [String],
  address: {
    type: addressSchema,
    required: true,
  },
  orders: [ordersSchema],
}, {
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
    },
  }
});


userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  //  hashing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});




// model here
const UserModel = model<IUser>('User', userSchema);

export default UserModel;
