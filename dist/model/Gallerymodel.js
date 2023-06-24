"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const imageupload = new mongoose_1.default.Schema({
    GalleryImage: {
        type: String
    }
}, { timestamps: true });
const Gallerymodel = mongoose_1.default.model("Images", imageupload);
exports.default = Gallerymodel;
