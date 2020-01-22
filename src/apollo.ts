import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:5006/graphql"
});

export default client;
