import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ID: string =
  "70481075578-gctha03k0ka6dj8dusgr66vs1p020r2k.apps.googleusercontent.com";
const GOOGLE_SECRET: string = "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";
const GOOGLE_REFRESHTOKEN: string =
  "1//04epwdpcp0RecCgYIARAAGAQSNwF-L9Ir6WxAGHVhosLc1crvXuM51SqmQ7k4lcSjPajgg8vMCy2Yg5Uxv38sUPIRQFY3SMMtu-0";
const GOOGLE_REDIRECT: string =
  "https://developers.google.com/oauthplayground/";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

export const emailEnv = async (user: any) => {
  try {
    oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
    const getToken: any = (await oAuth.getAccessToken()).token;

    const receiverEmail = "okwolig60@gmail.com"

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        type: "OAuth2",
        user: "okwolig12@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        // accessToken: getToken,
        accessToken:
          "ya29.a0Ael9sCPX7sj7VjIJE3vYtKYKmE6wl16_4n1O3eKP-QZoF8L-ge7bxUXxPAyLR8-h603iC2dzTvfUL_QAqE8qs-fRY1dvWI9Lcov7QAbAR2zPRp1MacUC2cncPSC3ij5lPrLSMDy6cepI0AIFia8O4yjASmR_aCgYKAWQSARASFQF4udJhR1A5ss-fWGW7H9U-_cRfkA0163",
        // accessToken: getToken.token || "",
      },
    });

    const mailerOption = {
      from: "no-reply✉️ <uniabuja@gmail.com>",
      to: receiverEmail,
      subject: "Account verification",
      html: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
     <title>Account Verification Email</title>
      </head>
      <body>
  
        <h3>From ${user?.name}</h3>
		<p>Subject Title : ${user?.title}</p><br/>
        <h5>${user?.subject}</h5>
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
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (user: any) => {
  try {
    oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
    const getToken: any = (await oAuth.getAccessToken()).token;

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        type: "OAuth2",
        user: "techicon19@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        // accessToken: getToken,
        accessToken:
          "ya29.a0Ael9sCOp1mUjffmmY5D70w-X3R2iCNqJNWkxudg3uYVTWpw4Ez2XpcPLUrdZhu3WSr7CnLHSiKzfQoU0WbnNjenICeyQKZCtJwhNDqUjy53Fowq6gbyB5vKhCRi8O3rf5uuAxeEzPuqEy4jVN2M74uTkHDgzwmQaCgYKAZQSARMSFQF4udJhxwbKl7hn-sLmpfCC5t9_rw0166",
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
  } catch (error) {
    console.log(error);
  }
};