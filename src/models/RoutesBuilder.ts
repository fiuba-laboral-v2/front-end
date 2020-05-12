export const RoutesBuilder = {
  login: "/login",
  register: "/register",
  applicant: {
    home: "/applicants",
    list: "/applicants/list",
    detail: (uuid: string) => `/applicants/${uuid}`,
    edit: (uuid: string) => `/applicants/${uuid}/edit`,
    signUp: "/applicants/sign-up",
    offerDetail: (uuid: string) => `/applicants/offers/${uuid}`
  },
  company: {
    list: "/companies",
    detail: (uuid: string) => `/companies/${uuid}`
  },
  notFound: "/*",
  internalServerError: "/error"
};
