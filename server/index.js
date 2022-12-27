const express=require('express');
const bcrypt = require('bcryptjs');
const cors=require('cors');
const app=express();
const dbConnect=require('./db')
const user_model = require('./models/user')

app.use(cors())
app.use(express.json())

dbConnect();

app.use(express.json());
app.post('/user',async(req,res)=>{
    try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await user_model.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(5000,()=>{
    console.log("listening")
})
