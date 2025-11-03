import express from "express";
const router = express.Router();

import worksRouter from "./worksRouter";
import mainRouter from "./mainRouter";

router.use("/forrest/main", mainRouter);
router.use("/forrest/works", worksRouter);

export { router };
