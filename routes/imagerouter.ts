import express from "express"
import { newpost, getimages, getoneimage, updateimage, deleteimage } from "../controller/imagecontroller"
import { coverUpload } from "../Config/multer"

const router = express.Router()

router.route("/post").post(coverUpload, newpost)
router.route("/getall").get(getimages)
router.route("/oneimage/:id").get(getoneimage)
router.route("/update/:id").patch(updateimage)
router.route("/delete/:id").delete(deleteimage)

export default router