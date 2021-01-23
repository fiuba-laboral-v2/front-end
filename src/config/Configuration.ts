import { Environment } from "./Environment";

export const Configuration = {
  production: {
    sub_domain: "/",
    application_base_url: "https://bolsadetrabajo.fi.uba.ar/graphql",
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
}[Environment.env()];
