
import orders from "../modles/orderschema.js";
 
 export const Ordersend = async (req,res) => {
    try {
        const neworders = await orders.find().sort({createdAt: -1})
        res.json(neworders)
    } catch (error) {
        console.log(error)
    }
}