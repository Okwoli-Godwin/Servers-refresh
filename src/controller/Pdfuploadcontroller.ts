import { Request, Response } from "express";
import PDFModel from "../model/Pdfuploadmodel";
import cloudinary from "../Config/cloudinary";

export const Post = async (req: Request, res: Response): Promise<Response> => {
    try {
        

        if (!req.file || !req.file.path) {
            return res.status(400).json({
                message: "No PDF file provided.",
            });
        }

        const cloudPdf = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
            folder: "pdfs",
            format: "pdf",
            public_id: req.file.originalname,
            overwrite: true
        });

        const cloudinaryUrl = cloudinary.url(cloudPdf.public_id, {
            secure: true,
            resource_type: "raw"
        })

        const {namepdf} = req.body;
        
        console.log("namepdf", namepdf)
        // Assuming you have a field called PDFFile in your model to store the PDF URL from Cloudinary
        const newFile = await PDFModel.create({
            namepdf,
            PDFFile: cloudinaryUrl,
            
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