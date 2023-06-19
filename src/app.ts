import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import router from "./routes/userroutes"
import imagerouter from "./routes/imagerouter"
import emailrouter from "./routes/Emailrouter"
import textrouter from "./routes/textroute"

export const appConfig = (app: Application) => {
    app.use(express.json())
        .use(cors())
        .use(morgan("dev"))

    app.use("/app", router)
    app.use("/app/image", imagerouter)
    app.use("/app/email", emailrouter)
    app.use("/app/text", textrouter)
}

