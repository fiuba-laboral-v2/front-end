const APPLICANTS = "postulantes";
const COMPANIES = "empresas";
const APPLICATIONS = "postulaciones";
const OFFERS = "ofertas";
const PROFILE = "perfil";
const SIGN_UP = "registro";
const LOGIN = "iniciar-sesion";
const EDIT = "editar";
const CREATE = "crear";
const ERROR = "error";
const NOT_FOUND = "pagina-inexistente";
const FORBIDDEN = "permiso-faltante";

const routeBuilder = (urlPrefix: string) =>
  (...path: string[]) => `${urlPrefix}/${path.join("/")}`;

const applicantRoute = routeBuilder("/postulante");
const companyRoute = routeBuilder("/empresa");
const publicRoute = routeBuilder("");

export const RoutesBuilder = {
  applicant: {
    list: () =>
      "/todos-los-postulantes", // TODO: /admin/postulantes

    signUp: () =>
      applicantRoute(SIGN_UP),

    myProfile: () =>
      applicantRoute(PROFILE),

    editMyProfile: () =>
      applicantRoute(PROFILE, EDIT),

    offerList: () =>
      applicantRoute(OFFERS),

    offerDetail: (uuid: string) =>
      applicantRoute(OFFERS, uuid),

    companies: () =>
      applicantRoute(COMPANIES),

    companyProfile: (uuid: string) =>
      applicantRoute(COMPANIES, uuid)
  },

  company: {
    signUp: () =>
      companyRoute(SIGN_UP),

    myProfile: () =>
      companyRoute(PROFILE),

    editMyProfile: () =>
      companyRoute(PROFILE, EDIT),

    createOffer: () =>
      companyRoute(OFFERS, CREATE),

    editOffer: (uuid: string) =>
      companyRoute(OFFERS, uuid, EDIT),

    offer: (uuid: string) =>
      companyRoute(OFFERS, uuid),

    jobApplications: () =>
      companyRoute(APPLICATIONS),

    applicantDetail: (uuid: string) =>
      companyRoute(APPLICANTS, uuid)
  },

  public: {
    home: () =>
      publicRoute(),

    register: () =>
      publicRoute(SIGN_UP),

    login: () =>
      publicRoute(LOGIN),

    internalServerError: () =>
      publicRoute(ERROR),

    notFound: () =>
      publicRoute(NOT_FOUND),

    forbidden: () =>
      publicRoute(FORBIDDEN)
  }
};
