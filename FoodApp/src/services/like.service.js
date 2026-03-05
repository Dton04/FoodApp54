import { prisma } from "../common/connect.prisma.js"

export const likeService = {
   async toogleLike(user_id, res_id) {
      const existingLike = await prisma.like_Res.findFirst({
         where: {
            user_id: user_id,
            res_id: res_id
         }
      })
      if (existingLike) {
         const newIsLike = !existingLike.isLike;
         const updatedLike = await prisma.like_Res.update({
            where: {
               id: existingLike.id
            },
            data: {
               isLike: newIsLike,
               ...(newIsLike && { date_like: new Date() })
            }
         })
         return {
            like: updatedLike,
            message: newIsLike ? "Đã like nhà hàng thành công!" : "Đã unlike nhà hàng thành công!"
         }
      } else {
         const newLike = await prisma.like_Res.create({
            data: {
               user_id: user_id,
               res_id: res_id,
               isLike: true,
               date_like: new Date()
            }
         })
         return {
            like: newLike,
            message: "Đã like nhà hàng thành công!"
         }
      }
   },
   async getlike(res_id) {
      const like = await prisma.like_Res.findMany({
         where: {
            res_id: Number(res_id),
            isLike: true
         }
      })
      return like
   },
   async getLikeByUser(user_id) {
      const like = await prisma.like_Res.findMany({
         where: {
            user_id: Number(user_id),
            isLike: true
         }
      })
      return like
   }
}