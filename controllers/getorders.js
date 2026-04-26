import orders from "../modles/orderschema.js"
import sendEmail from "../utils/Emailsend.js";

export const Getorders = async (req,res) =>{

const {name,email,date,packages,massage} = req.body;
try {
const Orders = await orders.create({name,email,date,packages,massage})
         console.log(Orders) 
       await sendEmail(Orders)
   } catch (error) {
    console.log("email faild but order save")
   } 

    res.status(201).json({
        sucess:true,
        massage:"Order sucessfully.."}
    )
}