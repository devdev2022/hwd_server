import { AppDataSource } from "../../data-source";
import { Works } from "../../entity/Works";

const getWorksImg = async (
  page: number,
  category: string,
  subMenu: number,
  limit: number
) => {
  const worksRepository = AppDataSource.getRepository(Works);

  try {
    const skip = (page - 1) * limit;

    let baseQuery = worksRepository
      .createQueryBuilder("works")
      .where("works.category = :category", { category });

    if (subMenu !== 1) {
      baseQuery = baseQuery.andWhere("works.sub_menu = :subMenu", { subMenu });
    }

    const totalCount = await baseQuery.getCount();

    const data = await baseQuery
      .select([
        "works.id",
        "works.category",
        "works.name",
        "works.link",
        "works.type",
        "works.created_at",
      ])
      .orderBy("works.created_at", "DESC")
      .skip(skip)
      .take(limit)
      .getMany();

    return { data, totalCount };
  } catch (err) {
    throw new Error(`GET_PICTURES_ERROR`);
  }
};

export default { getWorksImg };
