import { useEffect } from "react";
import {
  ApolloError,
  QueryHookOptions,
  QueryResult,
  useQuery as apolloUseQuery
} from "@apollo/client";
import { DocumentNode } from "graphql";
import { ErrorHandlers, handleError } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { FetchResult } from "$interfaces/Pagination";
import { useHistory } from "react-router-dom";

export type UseQueryResult<TVariables, TData> =
  QueryResult<TData, TVariables> &
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
  refetch: (variables: TVariables) => FetchResult<TData>;
  error: undefined;
  loading: false;
};

export const useQuery = <TVariables = {}, TData = {}>(
  node: DocumentNode,
  options?: IQueryOptions<TData, TVariables>
) => {
  const history = useHistory();
  const { errorHandlers, ...apolloOptions } = options || { errorHandlers: {} };
  const {
    data, error, loading, refetch, fetchMore
  } = apolloUseQuery<TData, TVariables>(node, apolloOptions);
  useEffect(
    () => {
      if (error) {
        handleError(error, {
          ...errorHandlers,
          AdminNotFoundError: () => history.push(RoutesBuilder.public.login())
        });
      }
    },
    [error, errorHandlers, history]
  );

  return { data, error, loading, refetch, fetchMore } as UseQueryResult<TVariables, TData>;
};

interface IQueryOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}
