"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const Storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.join(__dirname, "../../uploads"));
    },
    filename: (req, file, cb) => {
        // Keep the original file name
        cb(null, file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        // Accept only PDF files
        cb(null, true);
    }
    else {
        // Reject other file types
        cb(new Error("Invalid file type. Only PDF files are allowed."));
    }
};
const PdfUpload = (0, multer_1.default)({
    storage: Storage,
    fileFilter: fileFilter, // Add the file filter for PDF files
}).single("PDFFile");
exports.PdfUpload = PdfUpload;
