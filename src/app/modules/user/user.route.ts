import express from "express"
import { userControllers } from "./user.controller";

const router = express.Router();


// will call controller func
router.post('/', userControllers.createUser)


export const UserRoutes = router;



