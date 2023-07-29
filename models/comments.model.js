import mongoose from 'mongoose'

const {Schema} = mongoose

const commentsSchema = new Schema({


    comment:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true
    },
    replies:[String],
    userId:{
        type:String,
        required:true
    }
  


})

export default mongoose.model("Comments", commentsSchema)