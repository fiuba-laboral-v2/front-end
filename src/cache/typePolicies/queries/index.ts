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
  getOffers: {
    ...paginatedQuery,
    keyArgs: [
      "companyName",
      "businessSector",
      "title",
      "studentsStatus",
      "graduatesStatus",
      "careerCodes"
    ]
  },
  getMyOffers: paginatedQuery,
  getApplicants: {
    ...paginatedQuery,
    keyArgs: ["name", "careerCodes", "applicantType"]
  },
  getCompanies: {
    ...paginatedQuery,
    keyArgs: ["companyName", "businessSector"]
  },
  getJobApplications: {
    ...paginatedQuery,
    keyArgs: ["companyName", "applicantName", "offerTitle"]
  },
  getAdmins: paginatedQuery,
  getCompanyUsers: paginatedQuery,
  getCompanyNotifications: paginatedQuery,
  getApplicantNotifications: paginatedQuery,
  getAdminNotifications: paginatedQuery,
  getCompanyUsersByCompany: paginatedQuery
};
