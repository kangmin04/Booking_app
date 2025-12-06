import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    img: {
        type : String , 
    },
    username: {
        type : String , 
        required : true,
        unique: true
    },
    email : {
        type : String , 
        required : true,
        unique: true
    },
    password : {
        type : String , 
        required : true
    },
    isAdmin : {
        type : Boolean , 
        default : false,
    },
    phone : {
        type : String , 
        required : true , 
        unique : true , 
    },
    
    // verified: {
    //     type : Boolean, 
    // },

    country : {
        type : String , 
        
    }

}, {timestamps: true}

)

export default mongoose.model("User" , UserSchema);


