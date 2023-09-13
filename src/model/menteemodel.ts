import mongoose from "mongoose"

interface menteeschema {
    name: string;
    faculty: string;
    ResearchArea: string;
    email: string;
    phoneNumber: number;
}

interface iemailschema extends menteeschema, mongoose.Document{ }

const myemail = new mongoose.Schema<menteeschema>(
    {
        name: {
            type: String
        },
        faculty: {
            type: String
        },
        email: {
            type: String
        },
        phoneNumber: {
            type : Number
        },
        ResearchArea: {
            type: String
        },
    },
    {timestamps: true}
)

const menteeprofile = mongoose.model<iemailschema>("menteeemail", myemail)
export default menteeprofile