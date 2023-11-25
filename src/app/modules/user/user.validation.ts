import { z } from "zod";

// Define sub-schemas for nested structures
const fullNameValidationSchema = z.object({
    firstName: z.string().min(1, 'Please provide the first name.'),
    lastName: z.string().min(1, 'Please provide the last name.'),
  });
  
  const addressValidationSchema = z.object({
    street: z.string().min(1, 'Please provide the street name.'),
    city: z.string().min(1, 'Please provide the city name.'),
    country: z.string().min(1, 'Please provide the country name.'),
  });
  
  const ordersValidationSchema = z.object({
    productName: z.string().min(1, 'Please provide the product name.'),
    price: z.number().positive('Please provide a positive price.'),
    quantity: z.number().positive('Please provide a positive quantity.'),
  });
  

// Define the main user schema using Zod
const userNameValidationSchema = z.object({
  userId: z.number().positive('Please provide a positive userId.'),
  username: z.string().min(1, 'Please provide a username.'),
  password: z.string().min(6, 'Please provide a password with at least 6 characters.'),
  fullName: fullNameValidationSchema,
  age: z.number().positive('Please provide a positive age.'),
  email: z.string().email('Please provide a valid email address.'),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).optional(),
  address: addressValidationSchema,
  orders: z.array(ordersValidationSchema).optional(),
});




export default userNameValidationSchema;