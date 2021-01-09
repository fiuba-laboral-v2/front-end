import { paginatedQuery } from "./paginatedQuery";

export const queries = {
  getAdminTasks: {
    ...paginatedQuery,
    keyArgs: ["adminTaskTypes", "statuses"]
  },
  getApprovedOffers: {
    ...paginatedQuery,
    keyArgs: ["careerCodes"]
  },
  getMyLatestJobApplications: paginatedQuery,
  getOffers: paginatedQuery,
  getMyOffers: paginatedQuery,
  getApplicants: {
    ...paginatedQuery,
    keyArgs: ["name", "careerCodes", "applicantType"]
  },
  getCompanies: paginatedQuery,
  getJobApplications: paginatedQuery,
  getAdmins: paginatedQuery,
  getCompanyUsers: paginatedQuery,
  getCompanyNotifications: paginatedQuery,
  getApplicantNotifications: paginatedQuery,
  getAdminNotifications: paginatedQuery,
  getCompanyUsersByCompany: paginatedQuery
};
