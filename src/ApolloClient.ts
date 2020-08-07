import { ApolloClient as ApolloClientClass, createHttpLink } from "@apollo/client";
import { Configuration } from "$config";
import { InMemoryCache } from "./cache/InMemoryCache";

export const ApolloClient = new ApolloClientClass({
  link: createHttpLink({
    uri: Configuration.application_base_url,
    credentials: "include"
  }),
  cache: InMemoryCache
});
