import Client from "apollo-boost";
import Configuration from "$config";

const ApolloClient = new Client({
  uri: Configuration.application_base_url
});

export default ApolloClient;
