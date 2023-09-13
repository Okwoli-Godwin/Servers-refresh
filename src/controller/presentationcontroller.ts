import presentationprofile from "../model/presentationmodel";
import { presentationemail } from "../utils/presentationemail";
import {Request, Response} from "express"

export const creatingMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, department, level, email, phoneNumber } = req.body;

        const createData = await presentationprofile.create({
            name,
            email,
            department,
            phoneNumber,
            level
        })

        presentationemail(createData)
           
        
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