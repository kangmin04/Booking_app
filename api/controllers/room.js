import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'

// hotel model에 room = [String]형식으로 저장되어있음. 
//Room create 하고 생성된 room_id를 hotel에 추가. 
export const createRoom = async (req,res,next) => {
    const newRoom = new Room(req.body); //생성된건 항상 Save !! 
    try{
        const savedRoom = await newRoom.save(); 
        try{
            await Hotel.findByIdAndUpdate(req.params.hotelid , {
                $push : {
                    rooms : savedRoom._id
                }
            })
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom)
        
    }catch(err){
        next(err); 
    }

}

export const updateRoom = async (req,res,next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id , {
            $set : req.body
        },{new : true})
        res.status(200).json(updateRoom);
    } catch (err) {
        next(err);
        }
    }

export const deleteRoom = async (req,res,next) => {
        try{
            await Room.findByIdAndDelete(req.params.id);
            res.status(200).json("Room has been deleted");
        }catch(err){
            next(err);
        }
    }

export const getRoom = async (req,res,next) => {
        try{
            const room = await Room.findById(req.params.id);
            res.status(200).json(room);
        }catch(err){
            next(err);
        }
    }


    export const getRooms = async (req,res,next) => {
        try{
            const rooms = await Room.find();
            res.status(200).json(rooms);
        }catch(err){
            next(err);
        }
    }


       