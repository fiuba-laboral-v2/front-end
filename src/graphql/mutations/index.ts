import { loader } from "graphql.macro";

const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_CURRENT_APPLICANT = loader("./updateCurrentApplicant.graphql");
const SAVE_JOB_APPLICATION = loader("./saveJobApplication.graphql");
const CREATE_COMPANY = loader("./createCompany.graphql");
const CREATE_OFFER = loader("./createOffer.graphql");
const EDIT_OFFER = loader("./editOffer.graphql");
const LOGIN = loader("./login.graphql");

export {
  LOGIN,
  SAVE_APPLICANT,
  UPDATE_CURRENT_APPLICANT,
  SAVE_JOB_APPLICATION,
  CREATE_COMPANY,
  CREATE_OFFER,
  EDIT_OFFER
};
