import { prisma } from "../common/connect.prisma.js"

const rateService = {
   async addRate(data) {
      const rate = await prisma.rate_Res.create({
         data: {
            amount: data.amount,
            date_rate: new Date(),
            user_id: data.user_id,
            res_id: data.res_id
         }
      })
      return rate
   },
   async getRateByRestaurant(res_id) {
      const rate = await prisma.rate_Res.findMany({
         where: {
            res_id: Number(res_id),
            isDeleted: false
         }

      })
      return rate
   },
   async getRateByUser(user_id) {
      const rate = await prisma.rate_Res.findMany({
         where: {
            user_id: Number(user_id),
            isDeleted: false
         }
      })
      return rate
   },
   async deleteRate(id) {
      const rate = await prisma.rate_Res.update({
         where: {
            id: Number(id)
         },
         data: {
            isDeleted: true,
            deletedAt: new Date(),
            deletedBy: 7
         }
      })
      return rate
   }
}

export default rateService