import express from "express";
const router = express.Router();

import { getBusinessInfo } from "../controllers/commonController";

router.get("/businessInfo", getBusinessInfo);

export default router;
