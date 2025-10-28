import express from 'express';
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from '../controllers/room.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/:hotelid', createRoom);//추후 req.params.hotelid로 참조함. 그 아이디로 findByIdUpdate를 통해 Room에 추가. 
//, verifyAdmin
// UPDATE
router.put('/:id',verifyAdmin, updateRoom);

// DELETE
router.delete('/:id',verifyAdmin, deleteRoom);

// GET
router.get('/:id', getRoom);

// GET ALL
router.get('/', getRooms);

export default router;
