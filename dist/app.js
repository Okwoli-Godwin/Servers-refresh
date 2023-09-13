"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const userroutes_1 = __importDefault(require("./routes/userroutes"));
const imagerouter_1 = __importDefault(require("./routes/imagerouter"));
const Emailrouter_1 = __importDefault(require("./routes/Emailrouter"));
const textroute_1 = __importDefault(require("./routes/textroute"));
const GalleryRouter_1 = __importDefault(require("./routes/GalleryRouter"));
const Pdfrouter_1 = __importDefault(require("./routes/Pdfrouter"));
const collaboratorrouter_1 = __importDefault(require("./routes/collaboratorrouter"));
const mentorrouter_1 = __importDefault(require("./routes/mentorrouter"));
const proposalrouter_1 = __importDefault(require("./routes/proposalrouter"));
const presentationrouter_1 = __importDefault(require("./routes/presentationrouter"));
const menteerouter_1 = __importDefault(require("./routes/menteerouter"));
const appConfig = (app) => {
    app.use(express_1.default.json())
        .use((0, cors_1.default)())
        .use((0, morgan_1.default)("dev"));
    app.use("/app", userroutes_1.default);
    app.use("/app/image", imagerouter_1.default);
    app.use("/app/email", Emailrouter_1.default);
    app.use("/app/text", textroute_1.default);
    app.use("/app/gallery", GalleryRouter_1.default);
    app.use("/app/pdf", Pdfrouter_1.default);
    app.use("/app/collaborator", collaboratorrouter_1.default);
    app.use("/app/mentor", mentorrouter_1.default);
    app.use("/app/proposal", proposalrouter_1.default);
    app.use("/app/presentation", presentationrouter_1.default);
    app.use("/app/mentee", menteerouter_1.default);
};
exports.appConfig = appConfig;
