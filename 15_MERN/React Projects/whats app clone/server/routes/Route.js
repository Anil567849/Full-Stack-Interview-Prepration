import express from 'express';
import {addUser, getUsers} from '../controller/UserController.js';
const route = express.Router();



route.post('/add', addUser);

route.get('/users', getUsers);


export default route;