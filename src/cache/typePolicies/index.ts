import { queries } from "./queries";

const merge = (_: object[] | undefined, incoming: object[]) => incoming;

export const typePolicies = {
  Query: {
    fields: {
      ...queries
    }
  },
  Applicant: {
    fields: {
      knowledgeSections: { merge },
      experienceSections: { merge }
    }
  },
  Offer: {
    fields: {
      sections: { merge }
    }
  }
};
