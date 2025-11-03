import mainDao from "../models/mainDao";

const getPictures = async () => {
  try {
    return await mainDao.getIntroduction();
  } catch (error) {
    throw new Error("GET_CONTENTS_FAILED");
  }
};

export default { getPictures };
