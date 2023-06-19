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
exports.deleteimage = exports.updateimage = exports.getoneimage = exports.getimages = exports.newpost = void 0;
const imagemodel_1 = __importDefault(require("../model/imagemodel"));
const cloudinary_1 = __importDefault(require("../Config/cloudinary"));
const newpost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cloudImg = yield ((_a = cloudinary_1.default.uploader) === null || _a === void 0 ? void 0 : _a.upload(req === null || req === void 0 ? void 0 : req.file.path));
        const { course, name, section, summary } = req.body;
        const newfile = yield imagemodel_1.default.create({
            course,
            name,
            coverImage: cloudImg.secure_url,
            section,
            summary
        });
        return res.status(201).json({
            message: "image uploaded",
            data: newfile
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to upload image",
            data: error.message
        });
    }
});
exports.newpost = newpost;
const getimages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getpost = yield imagemodel_1.default.find();
        return res.status(201).json({
            message: "images gotten successfully",
            data: getpost
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Failed to get images",
            data: error.message
        });
    }
});
exports.getimages = getimages;
const getoneimage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getone = yield imagemodel_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "one image gotten",
            data: getone
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Failed to get image",
            data: error.message
        });
    }
});
exports.getoneimage = getoneimage;
const updateimage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course, name, section, summary } = req.body;
        const getImage = yield imagemodel_1.default.findById(req.params.imageId);
        const update = yield imagemodel_1.default.findByIdAndUpdate(getImage === null || getImage === void 0 ? void 0 : getImage._id, { course, name, section, summary }, { new: true });
        return res.status(201).json({
            message: "image updated",
            data: update
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to update",
            data: error.message
        });
    }
});
exports.updateimage = updateimage;
const deleteimage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course, name, section, summary } = req.body;
        const deleteimage = yield imagemodel_1.default.findByIdAndRemove(req.params.id, { course, name, section, summary });
        return res.status(201).json({
            message: "image deleted",
            data: deleteimage
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "image failed to delete",
            data: error.message
        });
    }
});
exports.deleteimage = deleteimage;
