import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

// will call controller func
router.post('/', userControllers.createUser);
router.get('/', userControllers.getAllUsers);
router.get('/:userId', userControllers.getSingleUsers);
router.put('/:userId', userControllers.updateUser);
router.delete('/:userId', userControllers.deleteUser);
router.put('/:userId/orders', userControllers.addOrderToUser);
router.get('/:userId/orders', userControllers.getAllOrdersForUser);
router.get('/:userId/orders/total-price', userControllers.calculateTotalPriceForUser);

export const UserRoutes = router;
