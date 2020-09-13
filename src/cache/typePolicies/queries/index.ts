import { paginatedQuery } from "./paginatedQuery";

export const queries = {
  getAdminTasks: {
    ...paginatedQuery,
    keyArgs: ["adminTaskTypes", "statuses"]
  },
  getMyLatestJobApplications: paginatedQuery,
  getOffers: paginatedQuery,
  getApprovedOffers: paginatedQuery,
  getMyOffers: paginatedQuery
};
