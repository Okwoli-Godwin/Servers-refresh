import dotenv from "dotenv"

dotenv.config()

export const enviromentvariables = {
    PORT: process.env.PORT as string,
    MONGODBCONNECT: process.env.MONGODBCONNECT as string,
    Password: process.env.Password as string,
    Email: process.env.Email as string
}