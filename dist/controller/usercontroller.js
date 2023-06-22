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
exports.getall = exports.login = exports.register = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const enviromentvariable_1 = require("../enviromentvariable/enviromentvariable");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminPasword = enviromentvariable_1.enviromentvariables.Password;
        const { name, password, email } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(adminPasword, salt);
        const created = yield userModel_1.default.create({
            name,
            password: hashed,
            email
        });
        return res.status(200).json({
            message: password === adminPasword ? "Admin created" : "not an Admin",
            data: password === adminPasword ? created : null
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured",
            data: error,
            err: error.message
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const checkUser = yield userModel_1.default.findOne({ email: email });
        if (checkUser) {
            return res.status(200).json({
                message: "success",
                data: checkUser
            });
        }
        else {
            return res.status(400).json({
                message: "user not foud"
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "user not found"
        });
    }
});
exports.login = login;
const getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        return res.status(200).json({
            message: "users gotten",
            data: users
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "no users"
        });
    }
});
exports.getall = getall;
