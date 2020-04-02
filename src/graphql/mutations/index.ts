import { loader } from "graphql.macro";

const SIGN_UP = loader("./signUp.graphql");
const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_APPLICANT = loader("./updateApplicant.graphql");
const DELETE_APPLICANT_CAPABILITIES = loader("./deleteApplicantCapabilities.graphql");
const DELETE_APPLICANT_CAREERS = loader("./deleteApplicantCareers.graphql");

export {
  SIGN_UP,
  SAVE_APPLICANT,
  UPDATE_APPLICANT,
  DELETE_APPLICANT_CAPABILITIES,
  DELETE_APPLICANT_CAREERS
};
