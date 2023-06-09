"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const db_1 = require("./Config/db");
const enviromentvariable_1 = require("./enviromentvariable/enviromentvariable");
const app = (0, express_1.default)();
(0, app_1.appConfig)(app);
(0, db_1.dbconnection)();
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "API READY FOR Uni_Abuja CUR PROJECT",
    });
});
``;
app.listen(enviromentvariable_1.enviromentvariables.PORT, () => {
    console.log("Server is up and running", enviromentvariable_1.enviromentvariables.PORT);
});
