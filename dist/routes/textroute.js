"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const textcontroller_1 = require("../controller/textcontroller");
const textrouter = express_1.default.Router();
textrouter.route("/post").post(textcontroller_1.post);
textrouter.route("/update/:textId").patch(textcontroller_1.update);
exports.default = textrouter;
