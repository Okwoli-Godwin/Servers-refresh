"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const textupdate = new mongoose_1.default.Schema({
    writeups: {
        type: String
    },
    button: {
        type: String
    }
}, { timestamps: true });
const textsmodel = mongoose_1.default.model("updates", textupdate);
exports.default = textsmodel;
