import mongoose from "mongoose"

interface proposalschema {
    name: string;
    department: string;
    level: string;
    email: string;
    phoneNumber: number;
}

interface iemailschema extends proposalschema, mongoose.Document{ }

const myemail = new mongoose.Schema<proposalschema>(
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
    },
    {timestamps: true}
)

const proposalprofile = mongoose.model<iemailschema>("proposalemail", myemail)
export default proposalprofile