import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routers/auth.js';
import hotelsRouter from './routers/hotels.js';
import roomsRouter from './routers/rooms.js';
import usersRouter from './routers/users.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from './utils/error.js'; 
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

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

// await이 없으면 mongoose.connect 백그라운드에서 연결하며 그 다음 콘솔.log 출력. 
//이후 connect 함수가 종료되고 하단의 코드들이 실행되는 중, db연결 실패로 오류가 나도 catch 블럭을 지나서 오류 실행이 안됨. 
//즉 연결 완료거나 실패할 때까지 await으로 기다리게함. --> 연결 성공시에만 Connected to mongodb 출력됨. 
//await을 사용함으로써 db 연결이 성공하고 서버가 연결된다는 보장을 줌 -> 안정적. 
mongoose.connection.on('disconnected', () => {
  console.log('mongo db disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('mongo db connected');
});

//middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth' , authRouter);
app.use('/api/hotels' , hotelsRouter);
app.use('/api/rooms' , roomsRouter);
app.use('/api/users' , usersRouter);

// centralized error handler
app.use(errorHandler);

// ✅ React build 서빙
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/build")));

// ✅ React 라우터 fallback (API 외 모든 요청을 index.html로)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  connect(); 
  console.log(`Listening on http://localhost:${port}`);
})