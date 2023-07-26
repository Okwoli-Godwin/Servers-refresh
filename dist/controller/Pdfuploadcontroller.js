"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletepdf = exports.getpdfs = exports.Post = void 0;
const Pdfuploadmodel_1 = __importDefault(require("../model/Pdfuploadmodel"));
const cloudinary_1 = __importDefault(require("../Config/cloudinary"));
const Post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file || !req.file.path) {
            return res.status(400).json({
                message: "No PDF file provided.",
            });
        }
        const cloudPdf = yield cloudinary_1.default.uploader.upload(req.file.path, {
            resource_type: "auto",
            format: "pdf", // You can also set a specific format to ensure it's treated as a PDF
        });
        // Assuming you have a field called PDFFile in your model to store the PDF URL from Cloudinary
        const newFile = yield Pdfuploadmodel_1.default.create({
            PDFFile: cloudPdf.secure_url,
        });
        return res.status(201).json({
            message: "PDF uploaded",
            data: newFile,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Failed to upload PDF",
            data: error.message,
        });
    }
});
exports.Post = Post;
const getpdfs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getpost = yield Pdfuploadmodel_1.default.find();
        return res.status(201).json({
            message: "PDFs fetched successfully",
            data: getpost,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Failed to get PDFs",
            data: error.message,
        });
    }
});
exports.getpdfs = getpdfs;
const deletepdf = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { GalleryPdf } = req.body;
        const deletepdf = yield Pdfuploadmodel_1.default.findByIdAndRemove(req.params.id, { GalleryPdf });
        return res.status(201).json({
            message: "PDF deleted",
            data: deletepdf,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Failed to delete PDF",
            data: error.message,
        });
    }
});
exports.deletepdf = deletepdf;
