import mongoose from "mongoose";

interface User {
    name: string,
    password: string,
    email: string
}

interface userData extends User, mongoose.Document{ }

const iUser = new mongoose.Schema<User>(
    {
        name: {
            type: String,
        },
        password: {
            type: String,
        },
        email: {
            type: String,
        }
    }
)

const models = mongoose.model<userData>("user", iUser)
export default models