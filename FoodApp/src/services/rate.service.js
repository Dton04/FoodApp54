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
   async getRates(data) {
      const rates = await prisma.rate_Res.findMany({
         where: {
            user_id: data.user_id,
            res_id: data.res_id,
            isDeleted: false
         }
      })
      return rates
   }
   ,
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