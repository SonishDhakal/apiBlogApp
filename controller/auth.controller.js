import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import setError from '../utils/setError.js'
import jwt from 'jsonwebtoken'

export const login = async (req,res,next) =>{
    try{
        const findUser = await User.findOne({username:req.body.username})

        if(!findUser) return next(setError(400, "User not Found"))

        const isCorrect = bcrypt.compareSync(req.body.password,findUser.password)
        if(!isCorrect) return next(setError(400,"Incorrect Password"))

const {password,...info} = findUser._doc
const token = jwt.sign({
    id:findUser._id,

   },process.env.JWT_KEY)

   res.cookie("accessToken",token,{
    httpOnly:true,
   }).status(200).send(info)


        


    }
    catch(e){
        next(e)
    }


}
export const register = async (req,res,next) =>{



    try{
        const findUser  = await User.findOne({username:req.body.username})
        if(findUser) return next(setError(400, "Username already in Use"))

        const findemail  =await User.findOne({email:req.body.email})
        if(findemail) return next(setError(400, "Email already in Use"))
    

        







        const hash = bcrypt.hashSync(req.body.password,5)
        const newUser = new User({...req.body,
        password:hash})
        await newUser.save()
        res.status(200).send(newUser)
    }
    catch(e){
       next(e)
    
    }




}
export const  logout= async (req,res) =>{
    res.clearCookie("accessToken", {
        sameSite:"none",
        secure:true,
    })
    .status(200)
    .send("User has been logged out")
}