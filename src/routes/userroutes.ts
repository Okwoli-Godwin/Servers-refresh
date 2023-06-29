import express from "express";
import { register, getall, login } from "../controller/usercontroller";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getall").get(getall);

export default router;
