import { queries } from "./queries";

export const typePolicies = {
  Query: {
    fields: {
      ...queries
    }
  }
};
