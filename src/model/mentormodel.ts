import mongoose from "mongoose"

interface mentorschema {
    name: string;
    department: string;
    level: string;
    email: string;
    phoneNumber: number;
    ResearchTopic: string;
}

interface iemailschema extends mentorschema, mongoose.Document{ }

const myemail = new mongoose.Schema<mentorschema>(
    {
        name: {
            type: String
        },
        department: {
            type: String
        },
        level: {
            type: String,
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

const mentorprofile = mongoose.model<iemailschema>("mentoremail", myemail)
export default mentorprofile