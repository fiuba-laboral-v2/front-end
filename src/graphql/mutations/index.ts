import { loader } from "graphql.macro";

const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_APPLICANT = loader("./updateApplicant.graphql");

export {
  SAVE_APPLICANT,
  UPDATE_APPLICANT
};
