import { IdGetterObj, InMemoryCache as ApolloClientInMemoryCache } from "@apollo/client";
import { PossibleTypes } from "./PossibleTypes";

export const InMemoryCache = new ApolloClientInMemoryCache({
  possibleTypes: PossibleTypes,
  typePolicies: {
    Query: {
      fields: {
        getOffers: {
          keyArgs: [],
          merge: (existing, incoming) => ({
            ...incoming,
            offers: [...existing?.offers || [], ...incoming.offers]
          })
        }
      }
    }
  },
  dataIdFromObject: ({ uuid, id, __typename }: IObject) => {
    const key = uuid || id;
    if (!key) return undefined;
    return `${__typename}:${uuid || id}`;
  }
});

interface IObject extends IdGetterObj {
  uuid?: string;
}
