import express from 'express';
const router = express.Router();

import {getUsers} from '../controllers/user.js'

//getALl
router.get('/' , getUsers);
export default router;