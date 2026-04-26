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
export const sendEmail = async (Orders) => {

         const confirmlink = `${process.env.BACKEND_URL}/api/oders/${Orders._id}/confirm`;



    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'sa9300432@gmail.com',
        subject: "New order Received",
        html: `<h2> New order<h2/>
         <p><b>Name:<b/>${Orders.name}<p/>
        <p><b>email:<b/>${Orders.email}<p/>
         <p><b>date:<b/>${Orders.date}<p/>
         <p><b>packages:<b/>${Orders.packages}<p/>
         <p><b>massages:<b/>${Orders.massage}<p/> 
         <br/>
         
         <a herf="${confirmlink}"
         style="background:green; colour:white; padding;12px 24px;
         text-decoration:none; border-radius:6px;font-size:16px;">
         confirm this Order
         <a/>
         
         `,
    })
}

export default sendEmail;