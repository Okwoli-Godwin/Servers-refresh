import express from "express"
import {update, post} from "../controller/textcontroller"

const textrouter = express.Router()

textrouter.route("/post").post(post)
textrouter.route("/update/:textId").patch(update)

export default textrouter