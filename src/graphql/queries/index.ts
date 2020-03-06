import { loader } from "graphql.macro";

const getTranslations = loader("./getTranslations.graphql");
const getCompanyById = loader("./getCompanyById.graphql");
const getApplicantByPadron = loader("./getApplicantByPadron.graphql");
const getCareers = loader("./getCareers.graphql");

export {
  getTranslations,
  getCompanyById,
  getApplicantByPadron,
  getCareers
};
