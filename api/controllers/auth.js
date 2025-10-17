import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req,res,next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
           ...req.body,  
            password: hash
        });
//before : i indicated username: req.body.username, 
//username만 사용 , email: req.body.email,  but i didnt sent isadmin data. so it always end with false. 
//추가 : 현재 방식은 isAdmin : true로 작성 시 탈취될 위험이 있다. 단지 개발목적( 공부 목적에 적합) 
// 현업에서는 초기 서버 시작시 어드민계정 하나만 직접 만듦. 
        await newUser.save();
        res.status(200).send("User has been created");

    }catch(err){
        next(err);
    }
}


export const login = async (req,res,next) => {
    try{
        const user = await User.findOne({username : req.body.username}) ; 
        if(!user) return next(createError(404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"));

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);
        //jsonwebtoken library통해 암호화된 인증 토큰 생성. id , isAdmin은 payload.
        //이 토큰 가진사람이 누군지 / 권한에 대한 내용. 
        const {password, isAdmin, ...otherDetails} = user._doc;
        //pw , admin 정보 필터링. 
        res.cookie("access_token", token, {
            httpOnly: true,  //cant approcah cookie or js from other user. 
        }).status(200).json({...otherDetails});
        //res.cookie -> it will store cookie in client's browser. 
        //access_token is just name of token. doesnt rlly matter. 
        
    }catch(err){
        next(err);
    }
}
