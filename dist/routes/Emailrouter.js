"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmailController_1 = require("../controller/EmailController");
const emailrouter = express_1.default.Router();
emailrouter.post("/postmessage", EmailController_1.creatingMessage);
exports.default = emailrouter;
