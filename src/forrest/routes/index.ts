import express from "express";
const router = express.Router();

import aboutUsRouter from "./aboutUsRouter";
import worksRouter from "./worksRouter";
import mainRouter from "./mainRouter";
import commonRouter from "./commonRouter";

router.use("/forrest/aboutus", aboutUsRouter);
router.use("/forrest/main", mainRouter);
router.use("/forrest/works", worksRouter);
router.use("/forrest/common", commonRouter);

export { router };
