const applicantURLRoot = "postulante";
const companyURLRoot = "empresa";

export const RoutesBuilder = {
  applicant: {
    offerList: `/${applicantURLRoot}/ofertas`,
    list: `/${applicantURLRoot}/list`,
    detail: `/${applicantURLRoot}/perfil`,
    edit: (uuid: string) => `/${applicantURLRoot}/${uuid}/edit`,
    signUp: `/${applicantURLRoot}/sign-up`,
    offerDetail: (uuid: string) => `/${applicantURLRoot}/offers/${uuid}`
  },
  company: {
    list: `/${companyURLRoot}`,
    signUp: `/${companyURLRoot}/registro`,
    createOffer: `/${companyURLRoot}/oferta/crear`,
    jobApplications: `/${companyURLRoot}/postulaciones`,
    detail: (uuid: string) => `/${companyURLRoot}/${uuid}`,
    applicantDetail: (uuid: string) => `/${companyURLRoot}/postulantes/${uuid}`
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
