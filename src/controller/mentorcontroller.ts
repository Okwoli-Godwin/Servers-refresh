import mentorprofile from "../model/mentormodel";
import { mentoremailenv } from "../utils/mentoremail";
import {Request, Response} from "express"

export const creatingMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, department, level, email, phoneNumber, ResearchTopic } = req.body;

        const createData = await mentorprofile.create({
            name,
            email,
            department,
            phoneNumber,
            level,
            ResearchTopic
        })

        mentoremailenv(createData)
           
        
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