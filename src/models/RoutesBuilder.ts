const applicantURLRoot = "postulante";
const companyURLRoot = "empresa";

export const RoutesBuilder = {
  applicant: {
    offerList: `/${applicantURLRoot}/ofertas`,
    list: `/${applicantURLRoot}/list`,
    detail: (uuid: string) => `/${applicantURLRoot}/${uuid}`,
    edit: (uuid: string) => `/${applicantURLRoot}/${uuid}/edit`,
    signUp: `/${applicantURLRoot}/sign-up`,
    offerDetail: (uuid: string) => `/${applicantURLRoot}/offers/${uuid}`
  },
  company: {
    list: `/${companyURLRoot}`,
    signUp: `/${companyURLRoot}/registro`,
    createOffer: `/${companyURLRoot}/oferta/crear`,
    detail: (uuid: string) => `/${companyURLRoot}/${uuid}`
  },
  public: {
    home: "/",
    register: "/register",
    login: "/login",
    internalServerError: "/error",
    notFound: "/404",
    forbidden: "/404"
  }
};
