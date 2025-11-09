import { Request, Response } from "express";
import mainService from "../services/mainService";
import { catchAsync } from "../utils/error";

const getIntroduction = catchAsync(async (_req: Request, res: Response) => {
  try {
    const result = await mainService.getPictures();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});

const getSnsImg = catchAsync(async (_req: Request, res: Response) => {
  try {
    const result = await mainService.getSnsImg();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});

export { getIntroduction, getSnsImg };
