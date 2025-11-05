import { Request, Response } from "express";
import commonService from "../services/commonService";
import { catchAsync } from "../utils/error";

const getBusinessInfo = catchAsync(async (_req: Request, res: Response) => {
  try {
    const result = await commonService.getBusinessInfo();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});

export { getBusinessInfo };
