import express from 'express'
import { verifyToken } from '../middleware/jwt.js'
import {getUser} from '../controller/user.controller.js'
const router = express.Router()

router.get("/:id" , getUser)


export default router