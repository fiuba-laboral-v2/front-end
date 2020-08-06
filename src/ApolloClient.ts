import { ApolloClient, createHttpLink, IdGetterObj, InMemoryCache } from "@apollo/client";
import { Configuration } from "$config";

const client = new ApolloClient({
  link: createHttpLink({
    uri: Configuration.application_base_url,
    credentials: "include"
  }),
  cache: new InMemoryCache({
    possibleTypes: {
      AdminTask: ["Company", "Applicant"]
    },
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
  })
});

interface IObject extends IdGetterObj {
  uuid?: string;
}

export default client;
