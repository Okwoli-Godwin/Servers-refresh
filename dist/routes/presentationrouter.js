"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const presentationcontroller_1 = require("../controller/presentationcontroller");
const presentationrouter = express_1.default.Router();
presentationrouter.post("/postmessage", presentationcontroller_1.creatingMessage);
exports.default = presentationrouter;
