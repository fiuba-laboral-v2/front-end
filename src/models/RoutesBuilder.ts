const USERS = "usuarios";
const APPLICANTS = "postulantes";
const COMPANIES = "empresas";
const ADMINS = "administradores";
const APPLICATIONS = "postulaciones";
const OFFERS = "ofertas";
const PROFILE = "perfil";
const SENSITIVE_FIELDS = "campos-sensibles";
const PADRON = "padron";
const SIGN_UP = "registro";
const SETTINGS = "configuracion";
const LOGIN = "iniciar-sesion";
const EDIT = "editar";
const RECOVER = "recuperar";
const CREATE = "crear";
const ERROR = "error";
const NOT_FOUND = "pagina-inexistente";
const FORBIDDEN = "permiso-faltante";
const NOTIFICATIONS = "notificaciones";
const PASSWORD = "contrasena";
const REQUEST = "solicitar";
const EXPLANATION = "explicacion";

const routeBuilder = (urlPrefix: string) => (...path: string[]) => `${urlPrefix}/${path.join("/")}`;

const applicantRoute = routeBuilder("/postulante");
const companyRoute = routeBuilder("/empresa");
const adminRoute = routeBuilder("/admin");
const publicRoute = routeBuilder("");

const queryParams = (params?: string) => (params ? `?${params}` : "");

export const RoutesBuilder = {
  admin: {
    home: () => adminRoute(""),

    applicants: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(APPLICANTS)}${queryParams(searchParams)}`,

    companies: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(COMPANIES)}${queryParams(searchParams)}`,

    admins: () => adminRoute(ADMINS),

    offers: () => adminRoute(OFFERS),

    jobApplications: ({ searchParams }: { searchParams?: string } = {}) =>
      `${adminRoute(APPLICATIONS)}${queryParams(searchParams)}`,

    notifications: () => adminRoute(NOTIFICATIONS),

    signUp: () => adminRoute(SIGN_UP),

    settings: () => adminRoute(SETTINGS),

    applicantDetail: (uuid: string) => adminRoute(APPLICANTS, uuid),

    companyDetail: (uuid: string) => adminRoute(COMPANIES, uuid),

    companyUsers: (companyUuid: string) => adminRoute(COMPANIES, companyUuid, USERS),

    jobApplicationDetail: (uuid: string) => adminRoute(APPLICATIONS, uuid),

    offerDetail: (uuid: string) => adminRoute(OFFERS, uuid)
  },

  applicant: {
    signUp: ({ dni }: { dni?: string } = {}) =>
      `${applicantRoute(SIGN_UP)}${dni ? queryParams(`dni=${dni}`) : ""}`,

    login: () => applicantRoute(LOGIN),

    myProfile: () => applicantRoute(PROFILE),

    editMyProfile: () => applicantRoute(PROFILE, EDIT),

    offerList: ({ searchParams }: { searchParams?: string } = {}) =>
      `${applicantRoute(OFFERS)}${queryParams(searchParams)}`,

    offerDetail: (uuid: string) => applicantRoute(OFFERS, uuid),

    companies: () => applicantRoute(COMPANIES),

    notifications: () => applicantRoute(NOTIFICATIONS),

    companyProfile: (uuid: string) => applicantRoute(COMPANIES, uuid),

    editPadron: () => applicantRoute(PADRON, EDIT)
  },

  company: {
    signUp: () => companyRoute(SIGN_UP),

    myProfile: () => companyRoute(PROFILE),

    editMyProfile: () => companyRoute(PROFILE, EDIT),

    createOffer: () => companyRoute(OFFERS, CREATE),

    editOffer: (uuid: string) => companyRoute(OFFERS, uuid, EDIT),

    offer: (uuid: string) => companyRoute(OFFERS, uuid),

    myOffers: () => companyRoute(OFFERS),

    jobApplications: () => companyRoute(APPLICATIONS),

    applicantDetail: (uuid: string) => companyRoute(APPLICANTS, uuid),

    login: () => companyRoute(LOGIN),

    notifications: () => companyRoute(NOTIFICATIONS),

    users: () => companyRoute(USERS),

    createUser: () => companyRoute(USERS, CREATE),

    editUser: () => companyRoute(USERS, EDIT),

    editPassword: () => companyRoute(PASSWORD, EDIT),

    editMyForgottenPassword: ({ token }: { token?: string } = {}) =>
      `${companyRoute(PASSWORD, RECOVER)}${queryParams(token)}`,

    passwordRecovery: () => companyRoute(PASSWORD, RECOVER, REQUEST),

    passwordRecoveryExplanation: () => companyRoute(PASSWORD, RECOVER, EXPLANATION),

    editCriticalAttributes: () => companyRoute(PROFILE, SENSITIVE_FIELDS, EDIT)
  },

  public: {
    home: () => publicRoute(),

    login: () => publicRoute(LOGIN),

    internalServerError: () => publicRoute(ERROR),

    notFound: () => publicRoute(NOT_FOUND),

    forbidden: () => publicRoute(FORBIDDEN)
  }
};
