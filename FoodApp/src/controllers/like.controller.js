import { likeService } from "../services/like.service.js";
import { responseError, responseSuccess } from "../common/helpers/response.helper.js";
export const likeController = {
   async toogleLike(req, res) {
      try {
         const { user_id, res_id } = req.body;
         const result = await likeService.toogleLike(user_id, res_id);
         const response = responseSuccess(result.like, result.message)
         return res.status(200).json(response)
      } catch (error) {
         const response = responseError(error.message)
         return res.status(500).json(response)
      }
   },
   async getLike(req, res) {
      try {
         const { res_id } = req.params;
         const result = await likeService.getlike(res_id);
         const response = responseSuccess(result, "Lấy danh sách like của nhà hàng thành công!")
         return res.status(200).json(response)
      } catch (error) {
         const response = responseError(error.message)
         return res.status(500).json(response)
      }
   },
   async getLikeByUser(req, res) {
      try {
         const { user_id } = req.params;
         const result = await likeService.getLikeByUser(user_id);
         const response = responseSuccess(result, "Lấy danh sách like của user thành công!")
         return res.status(200).json(response)
      } catch (error) {
         const response = responseError(error.message)
         return res.status(500).json(response)
      }
   }
}