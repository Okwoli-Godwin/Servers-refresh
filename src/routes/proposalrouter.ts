import express from "express"
import { creatingMessage } from "../controller/proposalcontroller"


const proposalemailrouter = express.Router()

proposalemailrouter.post("/postmessage", creatingMessage)

export default proposalemailrouter