const mongoose = require('mongoose');
const dbConnect=async()=>{
    try{
        await mongoose.connect('mongodb+srv://srisai:srisai1234@cluster0.zmwycok.mongodb.net/?retryWrites=true&w=majority');
       
        console.log("connected")
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports=dbConnect;
