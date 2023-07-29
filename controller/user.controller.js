
import User from '../models/user.model.js'

export const getUser = async (req,res,next) =>{
    try{
        const findUser= await User.findById(req.params.id)
        res.status(200).send(findUser)

    }

    catch(e){
        next(e)
    }

}