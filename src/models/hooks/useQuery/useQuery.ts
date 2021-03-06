import {
  ApolloError,
  QueryResult,
  useQuery as apolloUseQuery,
  QueryHookOptions
} from "@apollo/client";
import { DocumentNode } from "graphql";
import { ErrorHandlers, handleError } from "$models/handleError";
import { defaultApolloOptions } from "./defaultApolloOptions";

export type UseQueryResult<TVariables, TData> = QueryResult<TData, TVariables> &
  (ILoadingQuery | IErroredQuery | ISuccessfulQuery<TVariables, TData>);

type ILoadingQuery = {
  data: undefined;
  refetch: undefined;
  error: undefined;
  loading: true;
};

type IErroredQuery = {
  data: undefined;
  refetch: undefined;
  error: ApolloError;
  loading: false;
};

type ISuccessfulQuery<TVariables, TData> = {
  data: TData;
  refetch: (variables: TVariables) => void;
  error: undefined;
  loading: false;
};

interface IQueryOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}

export const useQuery = <TVariables = {}, TData = {}>(
  node: DocumentNode,
  options?: IQueryOptions<TData, TVariables>
) => {
  const { errorHandlers, ...apolloOptions } = options || { errorHandlers: {} };
  const { data, error, loading, refetch, fetchMore } = apolloUseQuery<TData, TVariables>(node, {
    ...defaultApolloOptions,
    ...apolloOptions,
    onError: errorToHandle => handleError(errorToHandle, errorHandlers)
  });
  return { data, error, loading, refetch, fetchMore } as UseQueryResult<TVariables, TData>;
};
