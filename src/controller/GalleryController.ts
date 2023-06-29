import { Request, Response } from "express"
import Gallerymodel from "../model/Gallerymodel"
import cloudinary from "../Config/cloudinary"

export const Post = async (req: Request, res: Response): Promise<Response> => {
    try {
        const cloudImg = await cloudinary.uploader?.upload(req?.file!.path);

        // const { Image } = req.body;
        const newfile = await Gallerymodel.create({
            GalleryImage: cloudImg.secure_url,
        })

        return res.status(201).json({
            message: "image uploaded",
            data: newfile
        })
    } catch (error: any) {
        return res.status(400).json({
            message: "failed to upload image",
            data: error.message
        })
    }
}

export const getimages = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getpost = await Gallerymodel.find();

        return res.status(201).json({
            message: "images gotten successfully",
            data: getpost
        })
    } catch (error:any) {
        return res.status(400).json({
            message: "Failed to get images",
            data: error.message
        })
    }
}

export const deleteimage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {GalleryImage} = req.body;
        const deleteimage = await Gallerymodel.findByIdAndRemove(
            req.params.id, {GalleryImage}
        )

        return res.status(201).json({
            message: "image deleted",
            data: deleteimage
        })
    } catch (error:any) {
        return res.status(400).json({
            message: "image failed to delete",
            data: error.message
        })
    }
}