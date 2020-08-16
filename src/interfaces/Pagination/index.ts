import { ApolloQueryResult } from "@apollo/client";

export interface IPaginatedInput {
  dateTime: string;
  uuid: string;
}

export type FetchResult<Data> =
  Promise<ApolloQueryResult<Data>>;

export type OptionalFetchResult<Data> =
  Promise<ApolloQueryResult<Data> | undefined> | undefined;
