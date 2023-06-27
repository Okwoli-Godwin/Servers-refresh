import express, { Application, Request, Response } from "express"
import { appConfig } from "./app"
import { dbconnection } from "./Config/db"
import { enviromentvariables } from "./enviromentvariable/enviromentvariable"

const app: Application = express()

appConfig(app)
dbconnection()

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      message: "API READY FOR Uni_Abuja CUR PROJECT",
    });
  });``

app.listen(enviromentvariables.PORT, () => {
    console.log("Server is up and running", enviromentvariables.PORT);
})