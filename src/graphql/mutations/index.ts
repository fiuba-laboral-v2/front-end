import { loader } from "graphql.macro";

const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_APPLICANT = loader("./updateApplicant.graphql");
const LOGIN = loader("./login.graphql");

export {
  LOGIN,
  SAVE_APPLICANT,
  UPDATE_APPLICANT
};
