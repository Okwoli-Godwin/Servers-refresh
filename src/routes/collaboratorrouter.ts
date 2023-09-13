import express from "express"
import { creatingMessage } from "../controller/collaboratorcontroller"


const collaboratoremailrouter = express.Router()

collaboratoremailrouter.post("/postmessage", creatingMessage)

export default collaboratoremailrouter