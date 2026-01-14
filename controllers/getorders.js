import orders from "../modles/orderschema.js"
import transpoter from "../utils/Emailsend.js";

export const Getorders = async (req,res) =>{

const {name,email,date,packages,massage} = req.body;

const Orders =await orders.create({name,email,date,packages,massage})

await transpoter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,

    subject: "New order Received",
    html:`<h2> New order<h2/>
          <p><b>Name:<b/>${name}<p/>
           <p><b>email:<b/>${email}<p/>
            <p><b>date:<b/>${date}<p/>
             <p><b>packages:<b/>${packages}<p/>
              <p><b>massages:<b/>${massage}<p/> `
});
    res.json({massage:"Order sucessfully.."})
}