import express from "express";
const router = express.Router();

import { getIntroduction, getSnsImg } from "../controllers/mainController";

router.get("/introduction", getIntroduction);
router.get("/snsimg", getSnsImg);

export default router;
