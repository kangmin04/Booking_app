jwt token expire 추가

error stack

// room.js

import mongoose from 'mongoose'; // mongoose import 추가

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    const session = await mongoose.startSession(); // 세션 시작
    session.startTransaction(); // 트랜잭션 시작

    try {
        const savedRoom = await newRoom.save({ session }); // 세션 내에서 저장

        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id }
        }, { session }); // 세션 내에서 업데이트

        await session.commitTransaction(); // 모든 작업이 성공하면 커밋
        res.status(200).json(savedRoom);
    } catch (err) {
        await session.abortTransaction(); // 에러 발생 시 롤백
        next(err);
    } finally {
        session.endSession(); // 세션 종료
    }
}

export const deleteRoom = async (req, res, next) => {
    const roomId = req.params.id;

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        // 먼저 이 방을 포함하고 있는 호텔을 찾습니다.
        const hotel = await Hotel.findOne({ rooms: roomId }).session(session);
        
        // 방을 삭제합니다.
        await Room.findByIdAndDelete(roomId, { session });

        // 호텔이 존재하면, 호텔의 rooms 배열에서 해당 방 ID를 제거합니다.
        if (hotel) {
            await Hotel.findByIdAndUpdate(hotel._id, {
                $pull: { rooms: roomId }
            }, { session });
        }

        await session.commitTransaction();
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        await session.abortTransaction();
        next(err);
    } finally {
        session.endSession();
    }
}


동기식 암호화
// auth.js

export const register = async (req,res,next) => {
    try{
        const salt = await bcrypt.genSalt(10); // async 버전 사용
        const hash = await bcrypt.hash(req.body.password, salt); // async 버전 사용

        // ... (이하 동일)
    }catch(err){
        next(err);
    }
}
