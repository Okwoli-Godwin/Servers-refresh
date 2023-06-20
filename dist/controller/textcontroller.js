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
exports.update = exports.post = void 0;
const textmodel_1 = __importDefault(require("../model/textmodel"));
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { writeups, button } = req.body;
        const newtext = yield textmodel_1.default.create({
            writeups,
            button
        });
        return res.status(200).json({
            message: "texts posted",
            data: newtext
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "failed to post texts",
            data: error
        });
    }
});
exports.post = post;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { writeups, button } = req.body;
        const gettexts = yield textmodel_1.default.findById(req.params.textId);
        const update = yield textmodel_1.default.findByIdAndUpdate(gettexts === null || gettexts === void 0 ? void 0 : gettexts._id, { writeups, button }, { new: true });
        return res.status(201).json({
            message: "texts updated",
            data: update
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "failed to update text",
            data: error
        });
    }
});
exports.update = update;
