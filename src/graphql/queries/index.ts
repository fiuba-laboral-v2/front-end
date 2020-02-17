import { loader } from "graphql.macro";

const getTranslations = loader("./getTranslations.graphql");
const getCompanyById = loader("./getCompanyById.graphql");

export {
  getTranslations,
  getCompanyById
};
