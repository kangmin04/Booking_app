import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  deleteAllUsers
} from '../controllers/user.js';
import { verifyToken, verifyUser , verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are logged in');
// });

// router.get('/checkuser/:id', verifyUser,(req, res, next) => {
//   res.send('Hello user, you are logged in and you can delete your account');
// });


// router.get('/checkadmin/:id', verifyAdmin,(req, res, next) => {
//     res.send('Hello user, you are admin and you can delete all account');
//   });
  
// UPDATE
router.put('/:id', verifyUser,updateUser);

// DELETE
router.delete('/:id', deleteUser); //,verifyUser 제거 

// GET
router.get('/:id',getUser); //, verifyUser

// GET ALL
router.get('/', getUsers);   //verifyAdmin 잠시 지움

// //just for dev convenience
// router.delete('/', deleteAllUsers);

export default router;
