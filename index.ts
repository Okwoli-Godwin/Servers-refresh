import express, { Application } from "express"
import { appConfig } from "./app"
import { dbconnection } from "./Config/db"

const app: Application = express()

appConfig(app)
dbconnection()

app.listen(2022, () => {
    console.log("Server is up and running")
})