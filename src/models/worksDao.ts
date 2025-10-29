import { AppDataSource } from "../../data-source";
import { Works } from "../../entity/Works";

const getWorksImg = async (page: number, category: string, limit: number) => {
  const worksRepository = AppDataSource.getRepository(Works);

  try {
    const skip = (page - 1) * limit;

    const result = worksRepository
      .createQueryBuilder("works")
      .select([
        "works.id",
        "works.category",
        "works.name",
        "works.link",
        "works.type",
        "works.created_at",
      ])
      .where("works.category = :category", { category })
      .orderBy("works.created_at", "DESC")
      .skip(skip)
      .take(limit);
    return result.getMany();
  } catch (err) {
    throw new Error(`GET_PICTURES_ERROR`);
  }
};

export default { getWorksImg };
