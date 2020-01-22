import ApolloClient from "apollo-boost";
import configuration from "$config";

const client = new ApolloClient({
  uri: configuration.application_base_url
});

export default client;
