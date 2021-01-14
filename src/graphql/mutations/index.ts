import { loader } from "graphql.macro";

const SEND_PASSWORD_RECOVERY_EMAIL = loader("./sendPasswordRecoveryEmail.graphql");
const UPDATE_MY_FORGOTTEN_PASSWORD = loader("./updateMyForgottenPassword.graphql");
const UPDATE_COMPANY_USER_PASSWORD = loader("./updatePassword.graphql");
const SAVE_COMPANY_USER = loader("./saveCompanyUser.graphql");
const SAVE_ADMIN = loader("./saveAdmin.graphql");
const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_CURRENT_APPLICANT = loader("./updateCurrentApplicant.graphql");
const SAVE_JOB_APPLICATION = loader("./saveJobApplication.graphql");
const UPDATE_ADMIN_SETTINGS = loader("./updateAdminSettings.graphql");
const CREATE_COMPANY = loader("./createCompany.graphql");
const UPDATE_CURRENT_COMPANY = loader("./updateCurrentCompany.graphql");
const CREATE_OFFER = loader("./createOffer.graphql");
const EDIT_OFFER = loader("./editOffer.graphql");
const COMPANY_LOGIN = loader("./companyLogin.graphql");
const FIUBA_LOGIN = loader("./fiubaLogin.graphql");
const LOGOUT = loader("./logout.graphql");
const UPDATE_COMPANY_APPROVAL_STATUS = loader("./updateCompanyApprovalStatus.graphql");
const UPDATE_APPLICANT_APPROVAL_STATUS = loader("./updateApplicantApprovalStatus.graphql");
const UPDATE_OFFER_APPROVAL_STATUS = loader("./updateOfferApprovalStatus.graphql");
const UPDATE_PADRON = loader("./updatePadron.graphql");
const UPDATE_COMPANY_CRITICAL_ATTRIBUTES = loader("./updateCompanyCriticalAttributes.graphql");
const UPDATE_COMPANY_USER = loader("./updateCompanyUser.graphql");
const UPDATE_JOB_APPLICATION_APPROVAL_STATUS = loader(
  "./updateJobApplicationApprovalStatus.graphql"
);
const EXPIRE_OFFER = loader("./expireOffer.graphql");
const REPUBLISH_OFFER = loader("./republishOffer.graphql");
const UPDATE_ADMIN = loader("./updateAdmin.graphql");

export {
  SEND_PASSWORD_RECOVERY_EMAIL,
  UPDATE_MY_FORGOTTEN_PASSWORD,
  UPDATE_COMPANY_USER_PASSWORD,
  SAVE_COMPANY_USER,
  SAVE_ADMIN,
  FIUBA_LOGIN,
  COMPANY_LOGIN,
  EXPIRE_OFFER,
  LOGOUT,
  SAVE_APPLICANT,
  UPDATE_CURRENT_APPLICANT,
  SAVE_JOB_APPLICATION,
  UPDATE_ADMIN_SETTINGS,
  CREATE_COMPANY,
  CREATE_OFFER,
  EDIT_OFFER,
  UPDATE_CURRENT_COMPANY,
  UPDATE_COMPANY_APPROVAL_STATUS,
  UPDATE_APPLICANT_APPROVAL_STATUS,
  UPDATE_OFFER_APPROVAL_STATUS,
  UPDATE_JOB_APPLICATION_APPROVAL_STATUS,
  REPUBLISH_OFFER,
  UPDATE_PADRON,
  UPDATE_COMPANY_CRITICAL_ATTRIBUTES,
  UPDATE_COMPANY_USER,
  UPDATE_ADMIN
};
