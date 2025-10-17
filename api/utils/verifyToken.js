import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next) => {
     const token = req.cookies.access_token;
     if(!token) return next(createError(401, "You are not authenticated!"));

    jwt.verify(token , process.env.JWT , (err,user) => {
        if(err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next(); 
    })
}

export const verifyUser = (req,res,next) => {
    verifyToken(req,res,() => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized!"));
        }
    })
}
// verifyToken(req,res, next , () => { 
//verifyToken func only takes 3 parameter but it sends 4. forth callback func will be dismissed. 
//router.get('/' , verifyUser , getAllusers) .. verifyUser의 next엔 getAllusers를 실행하는 함수. 
//verifyToken에서 next가 호출되는데. 이 next가 아까 verifyUser에서 전달한 getAllusers 실행함수. 즉, 검토없이 바로 넘어감. --> 인증 안됨. 
export const verifyAdmin = (req,res,next) => {  //req,res이후에 나오는이걸 next()자리에 전달해서 실행하는것. 
    verifyToken(req,res,  () => {
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized!"));
        }
    })
}