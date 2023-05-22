import express, { Request, Response } from "express"
import imagemodel from "../model/imagemodel"
import cloudinary from "../Config/cloudinary"

export const newpost = async (req: any, res: Response):Promise<Response> => {
    try {
        const cloudImg = await cloudinary.uploader?.upload(req?.file!.path)
        const { course, name, section, summary } = req.body;

        const newfile = await imagemodel.create({
            course,
            name,
            coverImage: cloudImg.secure_url,
            section,
            summary
        });
        return res.status(201).json({
            message: "image uploaded",
            data: newfile
        })
    } catch (error:any) {
        return res.status(400).json({
            message: "failed to upload image",
            data: error.message
        })
    }
}

export const getimages = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getpost = await imagemodel.find();

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

export const getoneimage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getone = await imagemodel.findById(req.params.id)

        return res.status(201).json({
            message: "one image gotten",
            data: getone
        })
    } catch (error:any) {
        return res.status(400).json({
            message: "Failed to get image",
            data: error.message
        })
    }
}

export const updateimage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { course, name, section, summary } = req.body
        const update = await imagemodel.findByIdAndUpdate(
            req.params.id, { course, name, section, summary }, { new: true }
        );

        return res.status(201).json({
            message: "image updated",
            data: update
        })
    } catch (error:any) {
        return res.status(400).json({
            message: "failed to update",
            data: error.message
        })
    }
}

export const deleteimage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { course, name, section, summary } = req.body;
        const deleteimage = await imagemodel.findByIdAndRemove(
            req.params.id, {course, name, section, summary }
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