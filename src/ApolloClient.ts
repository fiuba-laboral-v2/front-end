import { IdGetterObj, InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import Configuration from "$config";

const client = new ApolloClient({
  link: createHttpLink({
    uri: Configuration.application_base_url,
    credentials: "include"
  }),
  cache: new InMemoryCache({
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
