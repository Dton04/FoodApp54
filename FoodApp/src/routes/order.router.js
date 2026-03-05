import express from "express"
import { orderController } from "../controllers/order.controller.js"

export const orderRouter = express.Router()

orderRouter.post("/", orderController.addOrder)
orderRouter.get("/user/:userId", orderController.getOrder)
orderRouter.get("/order/:orderId", orderController.getOrderById)

export default orderRouter