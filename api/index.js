import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routers/auth.js';
import hotelsRouter from './routers/hotels.js';
import roomsRouter from './routers/rooms.js';
import usersRouter from './routers/users.js';
import cookieParser from 'cookie-parser';

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

// ERROR HANDLING MIDDLEWARE
// This MUST be the last app.use() call
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack, // The stack trace is useful for debugging
  });
})

app.listen(port, () => {
  connect(); 
  console.log(`Listening on http://localhost:${port}`);
})