import orders from "../modles/orderschema.js";

export const Confirmorder = async(req, res) => {
  try {
    const order = await orders.findById(req.params.orderId)
    
    if (!order) return res.send("<h1>Order not found!</h1>")

    // Already confirmed check
    if (order.status === "confirmed") {
      return res.send(`<h1 style="color:orange">⚠️ Already Confirmed!</h1>`)
    }

    await orders.findByIdAndUpdate(
      req.params.orderId,
      { status: "confirmed" },
      { new: true }  // ✅ lowercase
    )

    res.send(`<h1 style="color:green">✅ ${order.name} ka order Confirmed!</h1>`)

  } catch (error) {
    console.log("confirm order error", error)
    res.status(500).send("<h1>Something went wrong!</h1>")
  }
}