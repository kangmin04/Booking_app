import express from 'express';
import { auth, register } from '../controllers/auth.js';

const router = express.Router();

router.get("/" , auth)

router.post("/register" , register)

export default router;