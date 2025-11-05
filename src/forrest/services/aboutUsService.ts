import mainDao from "../models/aboutUsDao";

const getStaffPictures = async () => {
  try {
    return await mainDao.getStaffPictures();
  } catch (error) {
    throw new Error("GET_PICTURES_FAILED");
  }
};

export default { getStaffPictures };
