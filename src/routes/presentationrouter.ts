import express from "express"
import { creatingMessage } from "../controller/presentationcontroller"


const presentationrouter = express.Router()

presentationrouter.post("/postmessage", creatingMessage)

export default presentationrouter