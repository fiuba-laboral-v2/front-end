import { loader } from "graphql.macro";

const SIGN_UP = loader("./signUp.graphql");
const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_APPLICANT = loader("./updateApplicant.graphql");

export {
  SIGN_UP,
  SAVE_APPLICANT,
  UPDATE_APPLICANT
};
