const applicants = "postulantes";
const companies = "empresas";
const applications = "postulaciones";
const offers = "ofertas";
const profile = "perfil";
const signUp = "registro";
const login = "iniciar-sesion";
const edit = "editar";
const create = "crear";
const error = "error";
const notFound = "pagina-inexistente";
const forbidden = "permiso-faltante";

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
      applicantRoute(signUp),
    myProfile: () =>
      applicantRoute(profile),
    editMyProfile: () =>
      applicantRoute(profile, edit),
    offerList: () =>
      applicantRoute(offers),
    offerDetail: (uuid: string) =>
      applicantRoute(offers, uuid),
    companies: () =>
      applicantRoute(companies),
    companyProfile: (uuid: string) =>
      applicantRoute(companies, uuid)
  },
  company: {
    signUp: () =>
      companyRoute(signUp),
    myProfile: () =>
      companyRoute(profile),
    createOffer: () =>
      companyRoute(offers, create),
    offer: (uuid: string) =>
      companyRoute(offers, uuid),
    jobApplications: () =>
      companyRoute(applications),
    applicantDetail: (uuid: string) =>
      companyRoute(applicants, uuid)
  },
  public: {
    home: () =>
      publicRoute(),
    register: () =>
      publicRoute(signUp),
    login: () =>
      publicRoute(login),
    internalServerError: () =>
      publicRoute(error),
    notFound: () =>
      publicRoute(notFound),
    forbidden: () =>
      publicRoute(forbidden)
  }
};
