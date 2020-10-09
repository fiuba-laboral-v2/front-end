import { queries } from "./queries";

export const typePolicies = {
  Query: {
    fields: {
      ...queries
    }
  },
  Applicant: {
    fields: {
      knowledgeSections: {
        merge: (_: object[] | undefined, incoming: object[]) => incoming
      },
      experienceSections: {
        merge: (_: object[] | undefined, incoming: object[]) => incoming
      }
    }
  }
};
