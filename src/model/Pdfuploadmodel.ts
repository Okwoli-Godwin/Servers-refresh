import mongoose from "mongoose";

interface PDFData {
    PDFFile: string;
}

interface PDFModel extends PDFData, mongoose.Document {}

const pdfUploadSchema = new mongoose.Schema<PDFData>(
    {
        PDFFile: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const PDFModel = mongoose.model<PDFModel>("PDF", pdfUploadSchema);

export default PDFModel;