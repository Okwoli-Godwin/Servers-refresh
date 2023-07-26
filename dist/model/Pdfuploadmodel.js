"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const pdfUploadSchema = new mongoose_1.default.Schema({
    PDFFile: {
        type: String,
        required: true,
    }
}, { timestamps: true });
const PDFModel = mongoose_1.default.model("PDF", pdfUploadSchema);
exports.default = PDFModel;
