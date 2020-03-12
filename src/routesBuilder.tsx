const RoutesBuilder = {
  applicant: {
    detail: (padron: number) => `/applicants/${padron}/`,
    edit: (padron: number) => `/applicants/${padron}/edit`
  }
};

export { RoutesBuilder };
