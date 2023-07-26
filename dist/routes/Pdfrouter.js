"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pdfuploadcontroller_1 = require("../controller/Pdfuploadcontroller");
const Pdfmulter_1 = require("../Config/Pdfmulter");
const Pdfrouter = express_1.default.Router();
Pdfrouter.route("/post").post(Pdfmulter_1.PdfUpload, Pdfuploadcontroller_1.Post);
Pdfrouter.route("/getall").get(Pdfuploadcontroller_1.getpdfs);
Pdfrouter.route("/delete/:id").delete(Pdfuploadcontroller_1.deletepdf);
exports.default = Pdfrouter;
