import express from "express";

import { Getorders} from "../controllers/getorders.js";
import { Ordersend  } from  "../controllers/Sendorder.js";

const router = express.Router();

router.post("/send" , Getorders)
router.get("/recive", Ordersend)

export default router;