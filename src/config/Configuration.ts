const configurationForAllEnvironments = {
  production: {
    sub_domain: "/",
    application_base_url: "http://laboral.fi.uba.ar/graphql",
    show_seeded_users: false
  },
  staging: {
    sub_domain: "/",
    application_base_url: "http://antiguos.fi.uba.ar/graphql",
    show_seeded_users: true
  },
  development: {
    sub_domain: "/",
    application_base_url: "http://localhost:5006/graphql",
    show_seeded_users: true
  },
  test: {
    sub_domain: "/",
    application_base_url: "http://localhost:5006/graphql",
    show_seeded_users: false
  }
};

type Env = "production" | "staging" | "development" | "test";
const env = (process.env.REACT_APP_STAGE || process.env.NODE_ENV) as Env;
export const Configuration = configurationForAllEnvironments[env];
