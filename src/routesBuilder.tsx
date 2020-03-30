const RoutesBuilder = {
  applicant: {
    list: () => "/applicants/",
    detail: (uuid: string) => `/applicants/${uuid}/`,
    edit: (uuid: string) => `/applicants/${uuid}/edit`,
    signUp: () => "/applicants/sign-up/"
  },
  company: {
    list: () => "/companies/",
    detail: (id: number) => `/companies/${id}/`
  }
};

export { RoutesBuilder };
