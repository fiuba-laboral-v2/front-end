import { loader } from "graphql.macro";

const SIGN_UP = loader("./signUp.graphql");
const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_APPLICANT = loader("./updateApplicant.graphql");
const LOGIN = loader("./login.graphql");

export {
  LOGIN,
  SIGN_UP,
  SAVE_APPLICANT,
  UPDATE_APPLICANT
};
