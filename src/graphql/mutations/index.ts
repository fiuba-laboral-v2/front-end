import { loader } from "graphql.macro";

const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_APPLICANT = loader("./updateApplicant.graphql");
const SAVE_JOB_APPLICATION = loader("./saveJobApplication.graphql");
const CREATE_COMPANY = loader("./createCompany.graphql");
const LOGIN = loader("./login.graphql");

export {
  LOGIN,
  SAVE_APPLICANT,
  UPDATE_APPLICANT,
  SAVE_JOB_APPLICATION,
  CREATE_COMPANY
};
