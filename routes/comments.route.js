import express from 'express'
import { create,getComments,deleteComments,editComments} from '../controller/comments.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router = express.Router()


router.post("/create",verifyToken, create)
router.get("/:id", getComments )

router.delete("/:id",verifyToken, deleteComments )
router.post("/edit/:id",verifyToken, editComments )




export default router