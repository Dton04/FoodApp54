import { orderService } from "../services/order.service.js";

export const orderController = {
   async addOrder(req, res) {
      try {
         const { userId, foodId, amount, code, arr_sub_id } = req.body
         const order = await orderService.addOrder(userId, foodId, amount, code, arr_sub_id)
         res.status(200).json({
            message: "Đặt món thành công",
            order
         })
      } catch (error) {
         res.status(500).json({
            message: "Đặt món thất bại",
            error: error.message
         })
      }
   },
   async getOrder(req, res) {
      try {
         const { userId } = req.params
         const order = await orderService.getOrder(userId)
         res.status(200).json({
            message: "Lấy danh sách món ăn của người dùng thành công",
            order
         })
      } catch (error) {
         res.status(500).json({
            message: "Lấy danh sách món ăn của người dùng thất bại",
            error: error.message
         })
      }
   },
   async getOrderById(req, res) {
      try {
         const { orderId } = req.params
         const order = await orderService.getOrderById(orderId)
         res.status(200).json({
            message: "Lấy thông tin món ăn thành công",
            order
         })
      } catch (error) {
         res.status(500).json({
            message: "Lấy thông tin món ăn thất bại",
            error: error.message
         })
      }
   }
}
