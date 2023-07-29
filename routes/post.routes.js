import express from 'express'
import { create,getPosts,deletePost,edit,getPost} from '../controller/post.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router = express.Router()


router.post("/create",verifyToken, create)
router.get("/getposts", getPosts )
router.get("/:id", getPost )
router.delete("/:id",verifyToken, deletePost )
router.post("/edit/:id",verifyToken, edit )




export default router