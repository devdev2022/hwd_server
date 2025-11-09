import { AppDataSource } from "../../../data-source";
import { Introduction } from "../../../entity/forrest/Introduction";
import { SnsImg } from "../../../entity/forrest/SnsImg";

const getIntroduction = async () => {
  const worksRepository = AppDataSource.getRepository(Introduction);

  try {
    const data = await worksRepository
      .createQueryBuilder("Introduction")
      .select([
        "Introduction.id",
        "Introduction.content",
        "Introduction.thumbnail",
        "Introduction.cover_img",
        "Introduction.created_at",
      ])
      .getMany();

    return data;
  } catch (err) {
    throw new Error(`GET_CONTENT_ERROR`);
  }
};

const getSnsImg = async () => {
  const worksRepository = AppDataSource.getRepository(SnsImg);

  try {
    const data = await worksRepository
      .createQueryBuilder("SnsImg")
      .select(["SnsImg.id", "SnsImg.link", "SnsImg.created_at"])
      .getMany();

    return data;
  } catch (err) {
    throw new Error(`GET_DB_ERROR`);
  }
};

export default { getIntroduction, getSnsImg };
