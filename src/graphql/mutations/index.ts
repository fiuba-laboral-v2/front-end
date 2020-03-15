import { loader } from "graphql.macro";

const updateApplicant = loader("./updateApplicant.graphql");
const deleteApplicantCapabilities = loader("./deleteApplicantCapabilities.graphql");
const deleteApplicantCareers = loader("./deleteApplicantCareers.graphql");

export {
  updateApplicant,
  deleteApplicantCapabilities,
  deleteApplicantCareers
};
