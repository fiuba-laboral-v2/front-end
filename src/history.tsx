const HistoryRoutes = {
  applicant: {
    detail: (padron: number) => `/applicants/${padron}/`,
    edit: (padron: number) => `/applicants/${padron}/edit`
  }
};

export { HistoryRoutes };
