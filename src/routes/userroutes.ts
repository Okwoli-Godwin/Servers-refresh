import express from "express"
import { register, getall } from "../controller/usercontroller"

const router = express.Router()

router.route("/register").post(register)
router.route("/getall").get(getall)

export default router
