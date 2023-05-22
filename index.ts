import express, { Application } from "express"
import { appConfig } from "./app"
import { dbconnection } from "./Config/db"
import { enviromentvariables } from "./enviromentvariable/enviromentvariable"

const app: Application = express()

appConfig(app)
dbconnection()

app.listen(enviromentvariables.PORT, () => {
    console.log("Server is up and running")
})