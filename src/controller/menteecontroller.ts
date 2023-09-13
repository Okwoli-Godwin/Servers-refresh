import menteeprofile from "../model/menteemodel";
import { menteeemail } from "../utils/menteeemail";
import {Request, Response} from "express"

export const creatingMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, faculty, ResearchArea, email, phoneNumber } = req.body;

        const createData = await menteeprofile.create({
            name,
            email,
            faculty,
            phoneNumber,
            ResearchArea
        })

        menteeemail(createData)
           
        
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