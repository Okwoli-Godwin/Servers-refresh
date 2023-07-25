import express from "express"
import {getpdfs, Post, deletepdf} from "../controller/Pdfuploadcontroller"
import { PdfUpload } from "../Config/Pdfmulter"

const Pdfrouter = express.Router()

Pdfrouter.route("/post").post(PdfUpload, Post)
Pdfrouter.route("/getall").get(getpdfs)
Pdfrouter.route("/delete/:id").delete(deletepdf)

export default Pdfrouter