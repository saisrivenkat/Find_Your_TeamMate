const mongoose = require('mongoose')

const Post = new mongoose.Schema(
	{
       
		title: { type: String, required: true },
		description: { type: String, required: true},
        applicants:[mongoose.Schema.Types.Mixed],
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        }
		
	}
)

const post_model = mongoose.model('Posts', Post)

module.exports = post_model