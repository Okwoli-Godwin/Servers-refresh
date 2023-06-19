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
exports.resetPassword = exports.emailEnv = void 0;
const googleapis_1 = require("googleapis");
const nodemailer_1 = __importDefault(require("nodemailer"));
const GOOGLE_ID = "70481075578-gctha03k0ka6dj8dusgr66vs1p020r2k.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";
const GOOGLE_REFRESHTOKEN = "1//04epwdpcp0RecCgYIARAAGAQSNwF-L9Ir6WxAGHVhosLc1crvXuM51SqmQ7k4lcSjPajgg8vMCy2Yg5Uxv38sUPIRQFY3SMMtu-0";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground/";
const oAuth = new googleapis_1.google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);
const emailEnv = (sender) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
        const getToken = (yield oAuth.getAccessToken()).token;
        const receiverEmail = "okwolig60@gmail.com";
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "okwolig60@gmail.com",
                clientId: GOOGLE_ID,
                clientSecret: GOOGLE_SECRET,
                refreshToken: GOOGLE_REFRESHTOKEN,
                accessToken: getToken.token
            },
        });
        console.log(sender.email);
        const mailerOption = {
            from: `${sender === null || sender === void 0 ? void 0 : sender.email}<${receiverEmail}>`,
            to: receiverEmail,
            subject: "Account verification",
            html: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
     <title>Account Verification Email</title>
      </head>
      <body>
  
        <h3>From ${sender === null || sender === void 0 ? void 0 : sender.name}</h3>
		<p>Subject Title : ${sender === null || sender === void 0 ? void 0 : sender.title}</p><br/>
        <h5>${sender === null || sender === void 0 ? void 0 : sender.subject}</h5>
		<br/>
		<div>Thanks ,</div>
		
      </body>
    </html>`,
        };
        transporter
            .sendMail(mailerOption)
            .then(() => {
            console.log("Email Send");
        })
            .catch((err) => {
            console.log(err);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.emailEnv = emailEnv;
const resetPassword = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
        const getToken = (yield oAuth.getAccessToken()).token;
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "techicon19@gmail.com",
                clientId: GOOGLE_ID,
                clientSecret: GOOGLE_SECRET,
                refreshToken: GOOGLE_REFRESHTOKEN,
                // accessToken: getToken,
                accessToken: "ya29.a0Ael9sCOp1mUjffmmY5D70w-X3R2iCNqJNWkxudg3uYVTWpw4Ez2XpcPLUrdZhu3WSr7CnLHSiKzfQoU0WbnNjenICeyQKZCtJwhNDqUjy53Fowq6gbyB5vKhCRi8O3rf5uuAxeEzPuqEy4jVN2M74uTkHDgzwmQaCgYKAZQSARMSFQF4udJhxwbKl7hn-sLmpfCC5t9_rw0166",
            },
        });
        const mailerOption = {
            from: "Easy Pay💰💸 <techicon19@gmail.com>",
            to: user.email,
            subject: "Reset Password Request",
            html: `<div>Welcome ${user.userName} 
      <a href="http://localhost:3111/api/user/${user._id}/${user.token}/reset-password">verified</a>
      <br/>
      <br/>
      ${user.OTP}
        </div>`,
        };
        transporter
            .sendMail(mailerOption)
            .then(() => {
            console.log("Email Send");
        })
            .catch((err) => {
            console.log(err);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.resetPassword = resetPassword;
