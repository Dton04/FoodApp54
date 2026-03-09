import { responseError, responseSuccess } from "../common/helpers/response.helper.js"
import rateService from "../services/rate.service.js"

const rateController = {
   async addRate(req, res) {
      try {
         const { amount, user_id, res_id } = req.body
         const rate = await rateService.addRate({ amount, user_id, res_id })
         const response = responseSuccess("Thêm đánh giá thành công", rate)
         res.status(200).json(response)
      } catch (error) {
         console.log(error)
         res.status(500).json(responseError("Lỗi hệ thống", error))
      }
   },
   async getRates(req,res) {
      try {
         const {user_id, res_id} = req.body;
         const rates = await rateService.getRates({user_id, res_id})
         const response = responseSuccess("Lấy đánh giá thành công", rates)
         res.status(200).json(response)
      } catch (error) {
         console.log(error)
         res.status(500).json(responseError("Lỗi hệ thống", error))
         
      }
   },
   async deleteRate(req, res) {
      try {
         const { id } = req.params;
         const rate = await rateService.deleteRate(id);
         const response = responseSuccess("Xóa đánh giá thành công", rate)
         res.status(200).json(response)
      } catch (error) {
         console.log(error)
         res.status(500).json(responseError("Lỗi hệ thống", error))
      }
   }
}

export default rateController