import { queries } from "./queries";

export const typePolicies = {
  Query: {
    fields: {
      ...queries
    }
  },
  Applicant: {
    fields: {
      sections: {
        merge: (_: object[] | undefined, incoming: object[]) => incoming
      }
    }
  }
};
