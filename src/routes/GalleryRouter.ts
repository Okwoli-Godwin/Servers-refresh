import express from "express"
import { Post, getimages } from "../controller/GalleryController"
import {Upload} from "../Config/Gallerymulter"

const galleryrouter = express.Router()

galleryrouter.route("/post").post(Upload, Post)
galleryrouter.route("/getall").get(getimages)

export default galleryrouter