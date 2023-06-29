"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GalleryController_1 = require("../controller/GalleryController");
const Gallerymulter_1 = require("../Config/Gallerymulter");
const galleryrouter = express_1.default.Router();
galleryrouter.route("/post").post(Gallerymulter_1.Upload, GalleryController_1.Post);
galleryrouter.route("/getall").get(GalleryController_1.getimages);
galleryrouter.route("/delete/:id").delete(GalleryController_1.deleteimage);
exports.default = galleryrouter;
