const RoutesBuilder = {
  applicant: {
    home: () => "applicants/",
    list: () => "/applicants/list",
    detail: (uuid: string) => `/applicants/${uuid}/`,
    edit: (uuid: string) => `/applicants/${uuid}/edit`,
    signUp: () => "/applicants/sign-up/"
  },
  company: {
    list: () => "/companies/",
    detail: (id: number) => `/companies/${id}/`
  },
  notFound: "/*/"
};

export { RoutesBuilder };
