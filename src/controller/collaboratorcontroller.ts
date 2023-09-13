import collaboratorprofile from "../model/collaboratormodel";
import { colaboratoremailEnv } from "../utils/collaboratoremail";
import {Request, Response} from "express"

export const creatingMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, department, level, email, phoneNumber, ResearchTopic } = req.body;

        const createData = await collaboratorprofile.create({
            name,
            email,
            department,
            phoneNumber,
            level,
            ResearchTopic
        })

        colaboratoremailEnv(createData)
           
        
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