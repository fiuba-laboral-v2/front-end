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

/**
 * If you don't need to use fetchMode, use refetch, or access the error object
 * outside of an errorHandler, use useQuery.
 * This hook lets Apollo Client manage the state, but there's a bug in which
 * more than one usage of this hook in the same component leads to a react warning.
 * Our custom implementation does not have that bug, but it has less features.
 * That's why it's preferred.
 *
 * https://github.com/apollographql/apollo-client/pull/6216/files
 * https://github.com/apollographql/react-apollo/issues/3402
 */
export const useAdvancedQuery = <TVariables = {}, TData = {}>(
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
