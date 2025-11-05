import { Request, Response } from "express";
import aboutUsService from "../services/aboutUsService";
import { catchAsync } from "../utils/error";

const getStaffPictures = catchAsync(async (_req: Request, res: Response) => {
  try {
    const result = await aboutUsService.getStaffPictures();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});

export { getStaffPictures };
