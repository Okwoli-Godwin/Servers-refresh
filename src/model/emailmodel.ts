import mongoose from "mongoose"

interface emailschema {
    name: string;
    title: string;
    subject: string;
    email: string;
}

interface iemailschema extends emailschema, mongoose.Document{ }

const myemail = new mongoose.Schema<emailschema>(
    {
        name: {
            type: String
        },
        title: {
            type: String
        },
        subject: {
            type: String
        },
        email: {
            type: String
        }
    },
    {timestamps: true}
)

const emailprofile = mongoose.model<iemailschema>("email", myemail)
export default emailprofile