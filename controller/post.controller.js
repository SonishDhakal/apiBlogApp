import Post from '../models/post.model.js'
import User from '../models/user.model.js'
export const getPost = async (req,res,next) =>{
    try{
        const findPost = await Post.findOne({_id:req.params.id})


      
        
        
        res.status(200).json(findPost)


    }
    catch(e){
        next(e)


    }

}

export const getPosts=  async (req,res,next) =>{
    try{

        const {category} = req.query
        const {profile} = req.query
        if(category) {
            const findPost = await Post.find({category}).sort({ createdAt: 'desc'})
            return res.status(200).json(findPost)
        }
        if(profile){
         
            const findPost = await Post.find({userId:profile}).sort({ createdAt: 'desc'})
            return res.status(200).json(findPost)
        }
      




          const findPost = await Post.find().sort({ createdAt: 'desc'})
    
    
        
          
          
          res.status(200).json(findPost)
     







    }
    catch(e){
        next(e)


    }
}

export const deletePost= async (req,res,next) =>{
    try{
        const findPost = await Post.findOne({_id:req.params.id})


        if(req.id != findPost.userId) return next(setError(401,"You are not authroized to delete this post"))
        
        await Post.findOneAndDelete({_id:req.params.id})
        res.status(200).json("Delted Successfully")


    }
    catch(e){
        next(e)


    }}

export const edit= async (req,res,next) =>{}

export const create= async (req,res,next) =>{


    try{
        const finduser = await User.findOne({_id:req.id})
        const newPost = new Post({...req.body, userId:req.id,username:finduser.username})
        const response = await newPost.save()
        res.status(200).json(response)
    }
    catch(e){
        next(e)
    }

}
