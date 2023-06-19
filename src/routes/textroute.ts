import express from "express"
import {update, post} from "../controller/textcontroller"

const textrouter = express.Router()

textrouter.route("/post").post(post)
textrouter.route("/updste:textId").patch(update)

export default textrouter