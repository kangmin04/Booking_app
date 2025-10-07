import User from '../models/User.js'

export const getUsers = async (req , res , next) => {
    try{
        const user = await User.find(); //find doesnt execute directly. it returns mongoose query object. 순환오류? 좀더 알아봐야할듯. 
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

