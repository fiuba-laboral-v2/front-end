import { loader } from "graphql.macro";

const SIGN_UP = loader("./signUp.graphql");
const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const updateApplicant = loader("./updateApplicant.graphql");
const deleteApplicantCapabilities = loader("./deleteApplicantCapabilities.graphql");
const deleteApplicantCareers = loader("./deleteApplicantCareers.graphql");

export {
  SIGN_UP,
  SAVE_APPLICANT,
  updateApplicant,
  deleteApplicantCapabilities,
  deleteApplicantCareers
};
