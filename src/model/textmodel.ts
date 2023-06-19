import mongoose from "mongoose"

interface texts {
    writeups: string;
    button: string
}

interface Itexts extends texts, mongoose.Document{}

const textupdate = new mongoose.Schema<texts>(
    {
        writeups: {
            type: String
        },
        button: {
            type: String
        }
    },
    {timestamps: true}
)

const textsmodel = mongoose.model<Itexts>("updates", textupdate)
export default textsmodel