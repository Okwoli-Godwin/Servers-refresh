"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proposalcontroller_1 = require("../controller/proposalcontroller");
const proposalemailrouter = express_1.default.Router();
proposalemailrouter.post("/postmessage", proposalcontroller_1.creatingMessage);
exports.default = proposalemailrouter;
