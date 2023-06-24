import express from "express"
import { Post, getimages } from "../controller/GalleryController"
import {coverUpload} from "../Config/Gallerymulter"

const galleryrouter = express.Router()

galleryrouter.route("/post").post(coverUpload, Post)
galleryrouter.route("/getall").get(getimages)

export default galleryrouter