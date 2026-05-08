import orders from "../modles/orderschema.js";

export const Declined = async(req, res) => {
  try {
    const order = await orders.findById(req.params.orderId)
    
    if (!order) return res.send("<h1>Order not found!</h1>")

    // Already confirmed check
    if (order.status === "declined") {
      return res.send(`<h1 style="color:orange">⚠️ Already Declined!</h1>`)
    }

    await orders.findByIdAndUpdate(
      req.params.orderId,
      { status: "Declined" },
      { new: true }  // ✅ lowercase
    )

    res.send(`<h1 style="color:red">❌ ${order.name} ka order Declined!</h1>`)

  } catch (error) {
    console.log("declined order error", error)
    res.status(500).send("<h1>Something went wrong!</h1>")
  }
}