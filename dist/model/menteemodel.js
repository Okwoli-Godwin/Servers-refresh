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
    faculty: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    ResearchArea: {
        type: String
    },
}, { timestamps: true });
const menteeprofile = mongoose_1.default.model("menteeemail", myemail);
exports.default = menteeprofile;
