import dotenv from "dotenv"
dotenv.config();
import { Resend } from "resend"

//import nodemailer from "nodemailer";
//const transpoter = nodemailer.createTransport({
//service: "gmail",
   // auth: {
    //user: process.env.EMAIL,
      //  pass: process.env.EMAIL_PASS,
   // },
//});


const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (orders) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: `${EMAIL}`,
        subject: "New order Received",
        html: `<h2> New order<h2/>
         <p><b>Name:<b/>${orders.name}<p/>
        <p><b>email:<b/>${orders.email}<p/>
         <p><b>date:<b/>${orders.date}<p/>
         <p><b>packages:<b/>${orders.packages}<p/>
         <p><b>massages:<b/>${orders.massage}<p/> `,
    })
}

export default sendEmail;