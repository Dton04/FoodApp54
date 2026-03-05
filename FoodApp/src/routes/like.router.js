import express from "express"
import { likeController } from "../controllers/like.controller.js"

const likeRouter = express.Router()

likeRouter.post("/", likeController.toogleLike)
likeRouter.get("/restaurant/:res_id", likeController.getLike)
likeRouter.get("/user/:user_id", likeController.getLikeByUser)

export default likeRouter