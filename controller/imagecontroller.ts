import express, { Request, Response } from "express"
import imagemodel from "../model/imagemodel"
import cloudinary from "../Config/cloudinary"

export const newpost = async (req: Request, res: Response):Promise<Response> => {
    try {
        const cloudImg = await cloudinary.uploader.upload(req?.file!.path)
        const { course, name, section, summary } = req.body;

        const newfile = await imagemodel.create({
            course,
            name,
            image: cloudImg.secure_url,
            section,
            summary
        });
        return res.status(201).json({
            message: "image uploaded",
            data: newfile
        })
    } catch (error) {
        return res.status(400).json({
            message: "failed to upload image",
            data: error.message
        })
    }
}

