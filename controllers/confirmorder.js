import orders from "../modles/orderschema.js";


export  const Confirmorder = async(req , res) => {
    try {
       const order = await orders.findByIdAndUpdate(
        req.params.order.Id,
        {status: "confirmed"},
        {New: true}
       ) 
       if (!order) return res.send("order not found!");

       res.status(200).json({message:`${order.name} order is confirmed.`})
    } catch (error) {
        console.log("confirm oder error",error)
        res.status(500).json({mesage:"oops! odern not confirmed!"})
    }
}
