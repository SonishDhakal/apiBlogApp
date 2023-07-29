import express from 'express'
import { login,register,logout } from '../controller/auth.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router = express.Router()


router.post("/login", login)
router.post("/register", register)
router.get("/logout", logout )
router.get("/check", verifyToken, (req,res) =>{
    res.status(200).send("Authenticated")
} )



export default router