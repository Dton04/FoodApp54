import express from "express"
import rateController from "../controllers/rate.controller.js"

const rateRouter = express.Router()

rateRouter.post("/", rateController.addRate)
rateRouter.get("/", rateController.getRates)
rateRouter.delete("/:id", rateController.deleteRate)

export default rateRouter