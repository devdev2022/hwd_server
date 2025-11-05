import { AppDataSource } from "../../../data-source";
import { Staff } from "../../../entity/forrest/Staff";

const getStaffPictures = async () => {
  const worksRepository = AppDataSource.getRepository(Staff);

  try {
    const data = await worksRepository
      .createQueryBuilder("Staff")
      .select(["Staff.id", "Staff.name", "Staff.link", "Staff.name"])
      .getMany();

    return data;
  } catch (err) {
    console.log("err = ", err);
    throw new Error(`DB_ERROR`);
  }
};

export default { getStaffPictures };
