import express from 'express';
import { deleteUser, edit } from '../controllers/userController';

// /users
const userRouter = express.Router();

userRouter.get('/edit', edit);
userRouter.get('/delete', deleteUser);

export default userRouter;
