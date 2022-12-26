import express from 'express';
import { deleteUser, edit, logout, profile } from '../controllers/userController';

// /users
const userRouter = express.Router();

userRouter.get('/:id', profile);
userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/delete', deleteUser);

export default userRouter;
