const RoutesBuilder = {
  applicant: {
    list: () => "/applicants/",
    detail: (padron: number) => `/applicants/${padron}/`,
    edit: (padron: number) => `/applicants/${padron}/edit`
  },
  company: {
    list: () => "/companies/",
    detail: (id: number) => `/companies/${id}/`
  }
};

export { RoutesBuilder };
