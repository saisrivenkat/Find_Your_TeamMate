const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');
const user_model = require('../models/user')
const {protect} = require('../middleware/auth')
require('dotenv').config();


router.post('/register',async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const userExists = await user_model.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error('user already exists'); 
        }
		const newPassword = await bcrypt.hash(password, 10)
		const user= await user_model.create({
			name,
			email,
			password: newPassword,
		})
        if(user){
            res.status(200).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id),
                applied:user.applied
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data');
        }
	} catch (err) {
		res.send(err.message)
        console.log(err)
	}
})

router.put('/userapply',protect,async(req,res)=>{
    const user_id =  await user_model.findById(req.user.id);
    console.log(req.body)
    user_id.applied.push(req.body);
    const updated = await user_id.save();
    
    res.status(200).json(updated)


})

/*
author:sri sai

*/
router.post('/login',async(req,res)=>{
    try{
        const{email,password} = req.body;
        const user=await user_model.findOne({email});

        if(user && (await bcrypt.compare(password,user.password))){
            res.status(200).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id),
                applied:user.applied
            })
        }else{
            res.status(400)
            throw new Error('Invalid  data');
        }
    }catch(err){

    }
})

router.get('/userData',protect,(req,res)=>{
res.send('details');
})

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}


module.exports = router ;