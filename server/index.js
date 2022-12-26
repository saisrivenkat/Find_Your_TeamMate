const express=require('express');
const app=express();
const dbConnect=require('./db')

dbConnect();
app.use(express.json());
app.post('/user',(req,res)=>{
    const {email,password} = req.body;
    console.log(email);
})

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(5000,()=>{
    console.log("listening")
})
