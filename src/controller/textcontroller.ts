import { Request, Response } from "express"
import textsmodel from "../model/textmodel"

export const update = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { writeups, button } = req.body;
        const gettexts = await textsmodel.findById(req.params.textId)
        const update = await textsmodel.findByIdAndUpdate(
            gettexts?._id, {writeups, button}, {new: true}
        )

        return res.status(201).json({
            message: "texts updated",
            data: update
        })
    } catch (error) {
        return res.status(404).json({
            message: "failed to update text",
            data: error
        })
    }
}