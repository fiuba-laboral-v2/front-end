import { IdGetterObj, InMemoryCache, IntrospectionFragmentMatcher } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import introspectionResult from "./config/fragmentTypes.json";
import { Configuration } from "$config";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});

const client = new ApolloClient({
  link: createHttpLink({
    uri: Configuration.application_base_url,
    credentials: "include"
  }),
  cache: new InMemoryCache({
    fragmentMatcher,
    dataIdFromObject: ({ uuid, id, __typename }: IObject) => {
      const key = uuid || id;
      if (!key) return null;
      return `${__typename}_${uuid || id}`;
    }
  })
});

interface IObject extends IdGetterObj {
  uuid?: string;
}

export default client;
