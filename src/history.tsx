const HistoryRoutes = {
  applicant: {
    detail: (history: any, padron: number) => {
      history.push(`/applicants/${padron}/`);
    },
    edit: (history: any, padron: number) => {
      history.push(`/applicants/${padron}/edit`);
    }
  }
};

export { HistoryRoutes };
