import { IdGetterObj, InMemoryCache as ApolloClientInMemoryCache } from "@apollo/client";
import { possibleTypes } from "./possibleTypes";
import { typePolicies } from "./typePolicies";

export const InMemoryCache = new ApolloClientInMemoryCache({
  possibleTypes,
  typePolicies,
  dataIdFromObject: ({ uuid, id, __typename }: IObject) => {
    const key = uuid || id;
    if (!key) return undefined;
    return `${__typename}:${uuid || id}`;
  }
});

interface IObject extends IdGetterObj {
  uuid?: string;
}
