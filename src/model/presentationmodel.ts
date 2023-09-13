import mongoose from "mongoose"

interface presentationschema {
    name: string;
    department: string;
    level: string;
    email: string;
    phoneNumber: number;
}

interface iemailschema extends presentationschema, mongoose.Document{ }

const myemail = new mongoose.Schema<presentationschema>(
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

const presentationprofile = mongoose.model<iemailschema>("presentationemail", myemail)
export default presentationprofile