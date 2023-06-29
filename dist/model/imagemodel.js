"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const imageupload = new mongoose_1.default.Schema({
    course: {
        type: String,
        required: [true, "course is required"]
    },
    coverImage: {
        type: String,
    },
    name: {
        type: String,
        required: [true, "name is required"]
    },
    section: {
        type: String,
        required: [true, "section is required"]
    },
    summary: {
        type: String,
        required: [true, "summary is required"]
    }
}, { timestamps: true });
const imagemodel = mongoose_1.default.model("myImages", imageupload);
exports.default = imagemodel;
