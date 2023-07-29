import mongoose from 'mongoose'

const {Schema} = mongoose

const postSchema = new Schema({
   title:{
        type:String,
        required:true,
      
    },
    category:{
        type:String,
        required:true,
    
    },
    post:{
        type:String,
        required:true,
        
       
    },
    userId:String,
    username:String,

    image:{
        type:String,
        required:true,
    }


},{

    timestamps:true
})

export default mongoose.model("Post", postSchema)