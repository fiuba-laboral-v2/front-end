import { ApolloClient as ApolloClientClass } from "@apollo/client";
import { Configuration } from "$config";
import { InMemoryCache } from "./cache/InMemoryCache";
import { BatchHttpLink } from "@apollo/client/link/batch-http";

export const ApolloClient = new ApolloClientClass({
  link: new BatchHttpLink({
    uri: Configuration.application_base_url,
    credentials: "include",
    batchMax: 50
  }),
  cache: InMemoryCache
});
