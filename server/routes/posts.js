const express=require('express');
const app=express();
const router = express.Router();
const post_model = require('../models/posts');
const user_model = require('../models/user')
const {protect} = require('../middleware/auth');

router.post('/postData',protect,async(req,res)=>{
    const {title,description} = req.body;
    const post= await post_model.create({
        title,
        description,
        user:req.user.id
    })
    res.status(200).json({
        _id:post.id
    })
})




/*
access:private
url:"/post/getPosts"
*/
router.get('/getPosts',protect,async(req,res)=>{
    const posts = await post_model.find({user:req.user.id})
    
    res.status(200).json(posts);
})


/*
access:public
url:"/post/getallPosts"
*/
router.get('/getallPosts',async(req,res)=>{
    const posts = await post_model.find()


    res.send(posts);
})

router.put('/apply/:id',protect,async(req,res)=>{
    const goal = await post_model.findById(req.params.id)

    const update_post = await post_model.findById(req.params.id)
    console.log(req.body)
    update_post.applicants.push(req.body);
    const updated = await update_post.save();
    
    res.status(200).json(updated)
})


module.exports = router