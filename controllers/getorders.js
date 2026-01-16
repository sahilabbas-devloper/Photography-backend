import orders from "../modles/orderschema.js"
import sendEmail from "../utils/Emailsend.js";

export const Getorders = async (req,res) =>{

const {name,email,date,packages,massage} = req.body;

const Orders = await orders.create({name,email,date,packages,massage})

if (process.env.EMAIL && process.env.EMAIL_PASS) {
   try {
       await sendEmail(orders)
   } catch (error) {
    console.log("email faild but order save")
   } 
}
    res.status(201).json({
        sucess:true,
        massage:"Order sucessfully.."}
    )
}