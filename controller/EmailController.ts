import emailprofile from "../model/emailmodel";
import { emailEnv } from "../utils/email";
import {Request, Response} from "express"

export const creatingMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, title, subject, email } = req.body;

        const createData = await emailprofile.create({
            name,
            email,
            title,
            subject
        })

        emailEnv(createData)
           
        
        return res.status(200).json({
            message: "check your email for verification",
            data: {createData}
        })
    } catch (error) {
        return res.status(400).json({
            message: "failed to send email",
            data: error
        })
    }
}