import commonDao from "../models/commonDao";

const getBusinessInfo = async () => {
  try {
    return await commonDao.getBusinessInfo();
  } catch (error) {
    throw new Error("GET_PICTURES_FAILED");
  }
};

export default { getBusinessInfo };
