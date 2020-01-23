const configurationVariables = {
  production: {
    sub_domain: "/laboral",
    application_base_url: "http://laboral.fi.uba.ar/graphql"
  },
  staging: {
    sub_domain: "/laboral",
    application_base_url: "http://antiguos.fi.uba.ar/graphql"
  },
  development: {
    sub_domain: "/laboral",
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

export default configurationVariables;
