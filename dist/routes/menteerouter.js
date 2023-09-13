"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menteecontroller_1 = require("../controller/menteecontroller");
const menteerouter = express_1.default.Router();
menteerouter.post("/postmessage", menteecontroller_1.creatingMessage);
exports.default = menteerouter;
