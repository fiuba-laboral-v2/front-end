export const RoutesBuilder = {
  login: "/login",
  applicant: {
    home: () => "/applicants",
    list: () => "/applicants/list",
    detail: (uuid: string) => `/applicants/${uuid}/`,
    edit: (uuid: string) => `/applicants/${uuid}/edit`,
    signUp: () => "/applicants/sign-up/",
    offerDetail: (uuid: string) => `/applicants/offers/${uuid}`
  },
  company: {
    list: () => "/companies/",
    detail: (id: number) => `/companies/${id}/`
  },
  notFound: "/*/"
};
