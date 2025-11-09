import { AppDataSource } from "../../../data-source";
import { Introduction } from "../../../entity/forrest/Introduction";

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

export default { getIntroduction };
