import { AppDataSource } from "../../../data-source";
import { BusinessInfo } from "../../../entity/forrest/BusinessInfo";

const getBusinessInfo = async () => {
  const businessRepository = AppDataSource.getRepository(BusinessInfo);

  try {
    const data = await businessRepository
      .createQueryBuilder("BusinessInfo")
      .select([
        "BusinessInfo.id",
        "BusinessInfo.ceo_name",
        "BusinessInfo.business_name",
        "BusinessInfo.business_number",
        "BusinessInfo.business_address",
        "BusinessInfo.fax_number",
        "BusinessInfo.email_address",
        "BusinessInfo.instagram_link",
        "BusinessInfo.blog_link",
        "BusinessInfo.contact_number",
        "BusinessInfo.phone_number",
        "BusinessInfo.register_date",
      ])
      .getMany();

    return data;
  } catch (err) {
    console.log("err = ", err);
    throw new Error(`DB_ERROR`);
  }
};

export default { getBusinessInfo };
