import { loader } from "graphql.macro";

const getTranslations = loader("./getTranslations.graphql");
const getCompanyProfileById = loader("./getCompanyProfileById.graphql");

export {
  getTranslations,
  getCompanyProfileById
};
