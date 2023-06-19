"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const myemail = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    subject: {
        type: String
    },
    email: {
        type: String
    }
}, { timestamps: true });
const emailprofile = mongoose_1.default.model("email", myemail);
exports.default = emailprofile;
