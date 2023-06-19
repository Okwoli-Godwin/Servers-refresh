"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const iUser = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "password is required"]
    },
}, { timestamps: true });
const models = mongoose_1.default.model("user", iUser);
exports.default = models;
