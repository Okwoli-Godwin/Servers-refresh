"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const collaboratorcontroller_1 = require("../controller/collaboratorcontroller");
const collaboratoremailrouter = express_1.default.Router();
collaboratoremailrouter.post("/postmessage", collaboratorcontroller_1.creatingMessage);
exports.default = collaboratoremailrouter;
