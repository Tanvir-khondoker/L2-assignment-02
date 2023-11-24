import express from "express"
import { userControllers } from "./user.controller";

const router = express.Router();


// will call controller func
router.post('/', userControllers.createUser)
router.get('/', userControllers.getAllUsers)
router.get('/:userId', userControllers.getSingleUsers)

export const UserRoutes = router;



