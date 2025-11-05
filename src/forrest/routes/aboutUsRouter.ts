import express from "express";
const router = express.Router();

import { getStaffPictures } from "../controllers/aboutUsController";

router.get("/pictures", getStaffPictures);

export default router;
