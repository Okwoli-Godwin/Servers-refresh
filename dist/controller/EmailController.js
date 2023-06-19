"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatingMessage = void 0;
const emailmodel_1 = __importDefault(require("../model/emailmodel"));
const email_1 = require("../utils/email");
const creatingMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, title, subject, email } = req.body;
        const createData = yield emailmodel_1.default.create({
            name,
            email,
            title,
            subject
        });
        (0, email_1.emailEnv)(createData);
        return res.status(200).json({
            message: "check your email for verification",
            data: { createData }
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to send email",
            data: error
        });
    }
});
exports.creatingMessage = creatingMessage;
