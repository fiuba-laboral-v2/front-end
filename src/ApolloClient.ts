import Client from "apollo-boost";

const ApolloClient = new Client({
  uri: "http://localhost:5000/graphql"
});

export default ApolloClient;
