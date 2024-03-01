import express from 'express';
import {  register, login } from '../controllers/authentication.js';
import { deleteUser, getAllUsers, updateUser } from '../controllers/user.js';
import { isAuthenticated, isOwner } from '../middlewares/index.js';

const router = express.Router();

router.post('/auth/register', register);

router.post('/auth/login', login);


router.get('/users',isAuthenticated, getAllUsers)

router.delete('/users/dlt/:id',isAuthenticated, isOwner, deleteUser)

router.patch('/users/update/:id', isAuthenticated, isOwner, updateUser)
export default router;
