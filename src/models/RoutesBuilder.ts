const applicantURLRoot = "postulante";
const companyURLRoot = "empresa";

export const RoutesBuilder = {
  applicant: {
    offerList: `/${applicantURLRoot}/ofertas`,
    list: `/${applicantURLRoot}/list`,
    myProfile: `/${applicantURLRoot}/perfil`,
    edit: (uuid: string) => `/${applicantURLRoot}/${uuid}/edit`,
    signUp: `/${applicantURLRoot}/sign-up`,
    offerDetail: (uuid: string) => `/${applicantURLRoot}/offers/${uuid}`,
    companyProfile: (uuid: string) => `/${applicantURLRoot}/empresas/${uuid}`,
    companies: `/${applicantURLRoot}/empresas`
  },
  company: {
    signUp: `/${companyURLRoot}/registro`,
    createOffer: `/${companyURLRoot}/oferta/crear`,
    offer: (uuid: string) => `/${companyURLRoot}/ofertas/${uuid}`,
    jobApplications: `/${companyURLRoot}/postulaciones`,
    myProfile: `/${companyURLRoot}/perfil`,
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
