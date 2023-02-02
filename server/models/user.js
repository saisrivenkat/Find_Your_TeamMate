const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		phonenumber:{type:Number},
		githubUrl:{type:String},
		linkedinUrl:{type:String},
		educationalDetails:[mongoose.Schema.Types.Mixed],
		projects:[mongoose.Schema.Types.Mixed],
		technologies:{type:Array},
		applied:[mongoose.Schema.Types.Mixed],

	}
)

const user_model = mongoose.model('User', User)

module.exports = user_model