import express from "express";
const router = express.Router();

import { getPictures } from "../controllers/worksController";

router.get("", getPictures);

export default router;
