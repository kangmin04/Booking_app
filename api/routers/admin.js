import express from 'express';
import { uploadImg } from '../controllers/admin';

const router = express.Router() ; 

router.post('/profileImg' , uploadImg)

export default router ; 