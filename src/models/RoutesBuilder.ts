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
    signUp: "/companies/registro",
    detail: (uuid: string) => `/companies/${uuid}`,
    jobApplications: "/companies/postulaciones"
  },
  notFound: "/*",
  internalServerError: "/error",
  forbidden: "/*"
};
