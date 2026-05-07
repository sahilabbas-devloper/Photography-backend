import express from "express";

import { Getorders} from "../controllers/getorders.js";
import { Ordersend  } from  "../controllers/Sendorder.js";
import {Confirmorder} from "../controllers/confirmorder.js"

const router = express.Router();

router.post("/send" , Getorders)
router.post("/recive", Ordersend)
router.get("/:orderId/confirm", Confirmorder)
export default router;