import express from "express";
const router = express.Router();

import { getIntroduction } from "../controllers/mainController";

router.get("/introduction", getIntroduction);

export default router;
