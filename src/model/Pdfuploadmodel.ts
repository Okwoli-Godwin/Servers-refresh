import mongoose from "mongoose";

interface PDFData {
    PDFFile: string;
    namepdf: string;
}

interface PDFModel extends PDFData, mongoose.Document {}

const pdfUploadSchema = new mongoose.Schema<PDFData>(
    {
        PDFFile: {
            type: String,
            required: true,
        },
        namepdf: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const PDFModel = mongoose.model<PDFModel>("PDFs", pdfUploadSchema);

export default PDFModel;