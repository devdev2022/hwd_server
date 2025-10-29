import { Request, Response } from "express";
import worksService from "../services/worksService";
import { catchAsync } from "../utils/error";

const getPictures = catchAsync(async (req: Request, res: Response) => {
  const { page, category, limit } = req.query as {
    page: string;
    category: string;
    limit: string;
  };

  try {
    const result = await worksService.getPictures(
      Number(page),
      category,
      Number(limit)
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { getPictures };
