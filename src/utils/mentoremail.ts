import { google } from "googleapis";
import nodemailer from "nodemailer";

const GOOGLE_ID: string =
  "730919110921-2rl40ck7dnkhc4gm1idq7599rb29ubj5.apps.googleusercontent.com ";
const GOOGLE_SECRET: string = "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";
const GOOGLE_REFRESHTOKEN: string =
  "1//04g38ARY8A7ZFCgYIARAAGAQSNwF-L9IrRTtHoZvmgrCbFK7P5_FlFY0WXB4LTHHolfiaPUcv7mKis_njZJ_m1QWiLbouBne04aA";
const GOOGLE_REDIRECT: string =
  "https://developers.google.com/oauthplayground/";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

export const mentoremailenv = async (sender: any) => {
  try {
    oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });
    const getToken: any = (await oAuth.getAccessToken()).token;

    const receiverEmail = "cur@uniabuja.edu.ng"

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        type: "OAuth2",
        user: "cur@uniabuja.edu.ng",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken: getToken.token
      },
    });
      console.log(sender.email)
      
    const mailerOption = {
      from: `${sender?.email}<${receiverEmail}>`,
      to: receiverEmail,
      subject: "Need a Mentor",
      html: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
     <title>Need a Mentor</title>
      </head>
      <body>
  
        <h3>From ${sender?.name}</h3>
        <br>
		  <h4>Department : ${sender?.department}</h4>
        <h4>Level : ${sender?.level}</h4>
        <h4>phoneNumber : ${sender?.phoneNumber}</h4>
        <h4>ResearchTopic : ${sender?.ResearchTopic}</h5>
		<br/>
		<br/>
		<br/>
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