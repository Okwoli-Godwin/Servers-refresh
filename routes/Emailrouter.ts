import express from "express"
import { creatingMessage } from "../controller/EmailController"


const emailrouter = express.Router()

emailrouter.post("/postmessage", creatingMessage)

export default emailrouter