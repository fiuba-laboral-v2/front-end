import Client, { IdGetterObj, InMemoryCache } from "apollo-boost";
import Configuration from "$config";

const ApolloClient = new Client({
  uri: Configuration.application_base_url,
  cache: new InMemoryCache({
    dataIdFromObject: ({ uuid, id, __typename }: IObject) => {
      const key = uuid || id;
      if (!key) return null;
      return `${__typename}_${uuid || id}`;
    }
  }),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  }
});

interface IObject extends IdGetterObj {
  uuid?: string;
}

export default ApolloClient;
