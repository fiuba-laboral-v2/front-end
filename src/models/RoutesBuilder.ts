export const RoutesBuilder = {
  login: "/login",
  applicant: {
    home: () => {
      if (localStorage.getItem("token")) return "/applicants";
      return "/login";
    },
    list: () => "/applicants/list",
    detail: (uuid: string) => `/applicants/${uuid}/`,
    edit: (uuid: string) => `/applicants/${uuid}/edit`,
    signUp: () => "/applicants/sign-up/",
    offerDetail: (uuid: string) => `/applicants/offers/${uuid}`
  },
  company: {
    list: () => "/companies/",
    detail: (uuid: string) => `/companies/${uuid}/`
  },
  notFound: "/*/",
  internalServerError: "/error/"
};
