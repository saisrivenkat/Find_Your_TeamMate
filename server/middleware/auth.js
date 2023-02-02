const user_model= require('../models/user')
const jwt = require('jsonwebtoken');
require('dotenv').config();


const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user=await user_model.findById(decode.id).select('-password');
            next()
        }catch(err){
            console.log(err);
            res.status(401).json({
                err:err
            })
            
        }
    }

    if(!token){
        res.status(401).json({
            err:"Not Authorized, No token"
        })
        
    }
}
module.exports={protect};