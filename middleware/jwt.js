import jwt from 'jsonwebtoken'
import setError from '../utils/setError.js'
export const verifyToken = async (req,res,next) =>{
    const token = req.cookies.accessToken;
    if (!token) return next(setError(401,"Not authenticated!"))
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) =>{
        if (err) return next(createError(401,"Not authenticated"))

       req.id = payload.id
       next()
        // next()
    })
}