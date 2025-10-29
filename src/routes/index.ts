import express from "express";
const router = express.Router();

import worksRouter from "./worksRouter";

router.use("/forrest/works", worksRouter);

export { router };
