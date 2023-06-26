import express from "express";
import { update, post, getData } from "../controller/textcontroller";

const textrouter = express.Router();

textrouter.route("/posttext").post(post);
textrouter.route("/update/:textId").patch(update);
textrouter.route("/gettext").get(getData);

export default textrouter;
