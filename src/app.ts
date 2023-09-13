import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import router from "./routes/userroutes"
import imagerouter from "./routes/imagerouter"
import emailrouter from "./routes/Emailrouter"
import textrouter from "./routes/textroute"
import galleryrouter from "./routes/GalleryRouter"
import pdfrouter from "./routes/Pdfrouter"
import collaboratoremailrouter from "./routes/collaboratorrouter"
import mentorrouter from "./routes/mentorrouter"
import proposalemailrouter from "./routes/proposalrouter"
import { PdfUpload } from "./Config/Pdfmulter"

export const appConfig = (app: Application) => {
    app.use(express.json())
        .use(cors())
        .use(morgan("dev"))

    app.use("/app", router)
    app.use("/app/image", imagerouter)
    app.use("/app/email", emailrouter)
    app.use("/app/text", textrouter)
    app.use("/app/gallery", galleryrouter)
    app.use("/app/pdf", pdfrouter)
    app.use("/app/collaborator", collaboratoremailrouter)
    app.use("/app/mentor", mentorrouter)
    app.use("/app/proposal", proposalemailrouter)
}

