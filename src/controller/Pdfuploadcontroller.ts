import { Request, Response } from "express";
import PDFModel from "../model/Pdfuploadmodel";
import cloudinary from "../Config/cloudinary";

export const Post = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { namepdf } = req.body;
        if (!req.file || !req.file.path) {
            return res.status(400).json({
                message: "No PDF file provided.",
            });
        }

        const cloudPdf = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto", // This sets the resource type to "auto" to detect the file type automatically
            format: "pdf", // You can also set a specific format to ensure it's treated as a PDF
        });
        

        // Assuming you have a field called PDFFile in your model to store the PDF URL from Cloudinary
        const newFile = await PDFModel.create({
            PDFFile: cloudPdf.secure_url,
            namepdf
        });

        return res.status(201).json({
            message: "PDF uploaded",
            data: newFile,
        });
    } catch (error: any) {
        return res.status(400).json({
            message: "Failed to upload PDF",
            data: error.message,
        });
    }
};

export const getpdfs = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getpost = await PDFModel.find();

        return res.status(201).json({
            message: "PDFs fetched successfully",
            data: getpost,
        });
    } catch (error: any) {
        return res.status(400).json({
            message: "Failed to get PDFs",
            data: error.message,
        });
    }
};

export const deletepdf = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { GalleryPdf } = req.body;
        const deletepdf = await PDFModel.findByIdAndRemove(
            req.params.id,
            { GalleryPdf }
        );

        return res.status(201).json({
            message: "PDF deleted",
            data: deletepdf,
        });
    } catch (error: any) {
        return res.status(400).json({
            message: "Failed to delete PDF",
            data: error.message,
        });
    }
};