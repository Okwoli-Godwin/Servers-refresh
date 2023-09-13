import mongoose from "mongoose"

interface collaboratorschema {
    name: string;
    department: string;
    level: string;
    email: string;
    phoneNumber: number;
    ResearchTopic: string;
}

interface iemailschema extends collaboratorschema, mongoose.Document{ }

const myemail = new mongoose.Schema<collaboratorschema>(
    {
        name: {
            type: String
        },
        department: {
            type: String
        },
        level: {
            type: String
        },
        email: {
            type: String
        },
        phoneNumber: {
            type : Number
        },
        ResearchTopic: {
            type: String
        },
    },
    {timestamps: true}
)

const collaboratorprofile = mongoose.model<iemailschema>("collaboratoremail", myemail)
export default collaboratorprofile