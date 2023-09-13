import express from "express"
import { creatingMessage } from "../controller/mentorcontroller"


const mentorrouter = express.Router()

mentorrouter.post("/postmessage", creatingMessage)

export default mentorrouter