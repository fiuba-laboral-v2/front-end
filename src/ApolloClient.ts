import Client, { InMemoryCache } from "apollo-boost";
import Configuration from "$config";

const ApolloClient = new Client({
  uri: Configuration.application_base_url,
  cache: new InMemoryCache({
    addTypename: false
  }),
  headers: {
    authorization: localStorage.getItem("token")
  }
});

export default ApolloClient;
