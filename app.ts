import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import router from "./routes/userroutes"
import imagerouter from "./routes/imagerouter"

export const appConfig = (app: Application) => {
    app.use(express.json())
        .use(cors())
        .use(morgan("dev"))

    app.use("/app", router)
    app.use("/app/image", imagerouter)
}

