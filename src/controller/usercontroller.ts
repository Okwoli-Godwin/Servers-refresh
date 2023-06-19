import express, {Request, Response} from "express"
import models from "../model/userModel"
import bcrypt from "bcrypt"


export const register = async (req: Request, res: Response) => {
    try {
        const { name, password, email } = req.body
        
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)

        const created = await models.create({
            name,
            password: hashed,
            email
        })

        return res.status(200).json({
            message: "user created",
            data: created
        })
    } catch (error:any) {
        return res.status(404).json({
            message: "An error occured",
            data: error,
            err : error.message
        })
    }
}

export const getall = async (req: Request, res: Response) => {
    try {
        const users = await models.find()

        return res.status(200).json({
            message: "users gotten",
            data: users
        })
    } catch (error) {
        return res.status(404).json({
            message: "no users"
        })
    }
}