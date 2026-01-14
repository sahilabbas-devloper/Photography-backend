import dotenv from "dotenv"
dotenv.config();

import nodemailer from "nodemailer";

const transpoter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
 });

 export default transpoter;