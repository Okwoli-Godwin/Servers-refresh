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
    department: {
        type: String
    },
    level: {
        type: String,
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
}, { timestamps: true });
const presentationprofile = mongoose_1.default.model("presentationemail", myemail);
exports.default = presentationprofile;
