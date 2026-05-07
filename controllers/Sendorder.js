
import orders from "../modles/orderschema.js";
 
 export const Ordersend = async (req,res) => {
    try {
        const { name} = req.body

        
        const neworders = await orders.findOne({name})
           
         if(!neworders) {
            return res.status(404).json({message: "order not fount !"})
        }
        res.status(200).json({message: "Successfull ✅",neworders})
    } catch (error) {
         res.status(500).json({message: "internal server error !"})
        console.log(error)
    }
}