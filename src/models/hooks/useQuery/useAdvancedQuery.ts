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
 * This hook is used when a fetchMore or refetch is required. In the paginated queries, this hooks
 * is the one we should use.
 * This is due to an apollo bug that involves memory leaks as explained in the following links:
 *
 * https://github.com/apollographql/apollo-client/pull/6216/files
 * https://github.com/apollographql/react-apollo/issues/3402
 *
 * To consider: If this hooks is used more than once in the same rendered page,
 * the memory leak will occur
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
