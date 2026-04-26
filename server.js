import express from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import connectdb from "./config.connectDB/connectdb.js";
import ordersRoutes from "./routes/orderRoutes.js"


const app = express();
app.use(cors({
    methods:["POST","GET"],
    origin:["http://localhost:5173","https://photography-web-un.vercel.app"]
}))
app.use(express.json())



connectdb()



app.use("/api/orders", ordersRoutes);
app.use("/api/details",ordersRoutes)
app.use("/api/orders",ordersRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, (req, res) => {

    console.log("server is running port on ", PORT)
})