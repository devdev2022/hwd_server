import express from "express";
const router = express.Router();

import aboutUsRouter from "./aboutUsRouter";
import worksRouter from "./worksRouter";
import mainRouter from "./mainRouter";

router.use("/forrest/aboutus", aboutUsRouter);
router.use("/forrest/main", mainRouter);
router.use("/forrest/works", worksRouter);

export { router };
