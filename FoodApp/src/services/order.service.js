import { prisma } from "../common/connect.prisma.js"

export const orderService = {
   async addOrder(userId, foodId, amount, code, arr_sub_id) {
      const order = await prisma.orders.create({
         data: {
            userId: Number(userId),
            foodId: Number(foodId),
            amount: Number(amount),
            code: code || null,
            arr_sub_id: arr_sub_id || null
         }
      })
      return order
   },
   async getOrder(userId) {
      const order = await prisma.orders.findMany({
         where: {
            userId: Number(userId)
         }
      })
      return order
   },
   async getOrderById(orderId) {
      const order = await prisma.orders.findUnique({
         where: {
            id: Number(orderId)
         }
      })
      return order
   }
}