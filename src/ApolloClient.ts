import Client from "apollo-boost";
import configuration from "$config";

const ApolloClient = new Client({
  uri: configuration.application_base_url
});

export default ApolloClient;
