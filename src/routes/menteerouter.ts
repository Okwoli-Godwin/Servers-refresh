import express from "express"
import { creatingMessage } from "../controller/menteecontroller"


const menteerouter = express.Router()

menteerouter.post("/postmessage", creatingMessage)

export default menteerouter