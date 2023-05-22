import express from "express"
import { newpost, getimages, getoneimage, updateimage, deleteimage } from "../controller/imagecontroller"
import { coverUpload } from "../Config/multer"

const imagerouter = express.Router()

imagerouter.route("/post").post(coverUpload, newpost)
imagerouter.route("/getall").get(getimages)
imagerouter.route("/oneimage/:id").get(getoneimage)
imagerouter.route("/update/:id").patch(updateimage)
imagerouter.route("/delete/:id").delete(deleteimage)

export default imagerouter