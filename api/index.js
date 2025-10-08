import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routers/auth.js';
import hotelsRouter from './routers/hotels.js';
import roomsRouter from './routers/rooms.js';
import usersRouter from './routers/users.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from './utils/error.js'; 

dotenv.config();

const app = express();
const port = 8080;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('CONNECTED to mongo db');
  } catch (error) {
    throw error; 
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongo db disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('mongo db connected');
});

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth' , authRouter);
app.use('/api/hotels' , hotelsRouter);
app.use('/api/rooms' , roomsRouter);
app.use('/api/users' , usersRouter);

// centralized error handler
app.use(errorHandler);

app.listen(port, () => {
  connect(); 
  console.log(`Listening on http://localhost:${port}`);
})