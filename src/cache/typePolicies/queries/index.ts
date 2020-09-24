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
  getApplicants: paginatedQuery,
  getCompanies: paginatedQuery
};
