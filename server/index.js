const express=require('express');
const cors=require('cors');
const app=express();
const dbConnect=require('./db')

app.use(cors())
app.use(express.json())

//db connection
dbConnect();

// routes
app.use(express.json());
app.use('/user',require('./routes/user'))
app.use('/post',require('./routes/posts'))


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(5000,()=>{
    console.log("listening")
})
