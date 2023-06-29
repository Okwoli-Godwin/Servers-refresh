"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagecontroller_1 = require("../controller/imagecontroller");
const multer_1 = require("../Config/multer");
const imagerouter = express_1.default.Router();
imagerouter.route("/post").post(multer_1.coverUpload, imagecontroller_1.newpost);
imagerouter.route("/getall").get(imagecontroller_1.getimages);
imagerouter.route("/oneimage/:id").get(imagecontroller_1.getoneimage);
imagerouter.route("/update/:imageId").patch(imagecontroller_1.updateimage);
imagerouter.route("/delete/:adminId/:imageId").delete(imagecontroller_1.deleteimage);
exports.default = imagerouter;
