import { loader } from "graphql.macro";

const SIGN_UP = loader("./signUp.graphql");
const SAVE_APPLICANT = loader("./saveApplicant.graphql");

export {
  SIGN_UP,
  SAVE_APPLICANT
};
