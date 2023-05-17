import express from "express"
import { register } from "../controller/usercontroller"

const router = express.Router()

router.route("/register").post(register)

export default router
