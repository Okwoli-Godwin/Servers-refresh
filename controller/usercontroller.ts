import express, {Request, Response} from "express"
import models from "../model/userModel"
import bcrypt from "bcrypt"


export const register = async (req: Request, res: Response) => {
    try {
        const { name, password, email } = req.body
        
        const salt = await bcrypt.genSalt(10)
        const compare = bcrypt.hash(salt, password)

        const create = await models.create({
            name,
            password: compare,
            email
        })

        return res.status(200).json({
            message: "user created",
            data: create
        })
    } catch (error) {
        return res.status(404).json({
            message: "An error occured",
        })
    }
}

export const lgin = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(404).json({
            message: "failed to login user"
        })
    }
}