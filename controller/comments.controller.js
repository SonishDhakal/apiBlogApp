import setError from '../utils/setError.js'

import Comments from '../models/comments.model.js'
export const create= async (req,res,next) =>{
    try{
        const newCoomment =new Comments(
            {...req.body, userId:req.id}
            )
        const doc =  await newCoomment.save()
       res.status(200).json(doc)

    }
    catch(e){
        next(e)

    }

}
export const deleteComments = async(req,res,next) =>{
    try{
        const findComment = await Comments.findById(req.params.id)
        if(findComment.userId != req.id) return next(setError('404',"You are not authorized"))

      await Comments.findByIdAndDelete(req.params.id)
        res.status(200).send("Deleted Successfully")



       


    }
    catch(e){
        next(e)
    }

}
export const getComments= async (req,res,next) =>{
    try{
     
        const comments =await Comments.find({postId:req.params.id})
        
        if(!comments) return res.status(400).json("There are no comments")


        res.status(200).json(comments)

    }

    catch(e){
        next(e)
    }
}



export const editComments= async (req,res,next) =>{}


