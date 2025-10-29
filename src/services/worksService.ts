import worksDao from "../models/worksDao";

const getPictures = async (page: number, category: string, limit: number) => {
  try {
    return await worksDao.getWorksImg(page, category, limit);
  } catch (error) {
    throw new Error("GET_PICTURES_FAILED");
  }
};

export default { getPictures };
