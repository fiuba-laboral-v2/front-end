const RoutesBuilder = {
  applicant: {
    detail: (uuid: string) => `/applicants/${uuid}/`,
    edit: (uuid: string) => `/applicants/${uuid}/edit`
  }
};

export { RoutesBuilder };
