import mongoose from 'mongoose';
const RoomSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true,
    } , 
    price : {
        type : Number , 
        required : true,
    } , 
    maxPeople : {
        type : Number , 
        required : true
    } , 
    desc : {
        type : String , 
        required : true
    } , 
    roomNumbers : [{
        number : {
            type : Number
        } , 
        unavailableDates : {
            type : [Date]
        }
    }]

})

export default mongoose.model("Room" , RoomSchema);

//roomNumbers조회 시 _id가 존재함. 
//배열 내 객체는 서브 도큐먼트( 하위) 로 간주되고 id가 포함됨. 