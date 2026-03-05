import express from "express"
import rateController from "../controllers/rate.controller.js"

const rateRouter = express.Router()

rateRouter.post("/", rateController.addRate)
rateRouter.get("/restaurant/:res_id", rateController.getRateByRestaurant)
rateRouter.get("/user/:user_id", rateController.getRateByUser)
rateRouter.delete("/:id", rateController.deleteRate)

export default rateRouter