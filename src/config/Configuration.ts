const configurationForAllEnvironments = {
  production: {
    sub_domain: "/",
    application_base_url: "http://laboral.fi.uba.ar/graphql"
  },
  staging: {
    sub_domain: "/",
    application_base_url: "http://antiguos.fi.uba.ar/graphql"
  },
  development: {
    sub_domain: "/",
    application_base_url: "http://localhost:5006/graphql"
  },
  test: {
    sub_domain: "/",
    application_base_url: "http://localhost:5006/graphql"
  },
  test_travis: {
    sub_domain: "/",
    application_base_url: "http://localhost:5006/graphql"
  }
};

type Env = "production" | "staging" | "development" | "test" | "test_travis";
const env = (process.env.REACT_APP_STAGE || process.env.NODE_ENV) as Env;
export const Configuration = configurationForAllEnvironments[env];
