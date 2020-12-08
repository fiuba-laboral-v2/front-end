import {
  ApolloError,
  QueryResult,
  useApolloClient,
  useQuery as apolloUseQuery,
  QueryHookOptions
} from "@apollo/client";
import { DocumentNode } from "graphql";
import { ErrorHandlers, handleError } from "$models/handleError";
import { QueryOptions } from "@apollo/client/core/watchQueryOptions";
import { useEffect, useState } from "react";

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

const defaultApolloOptions = {
  notifyOnNetworkStatusChange: true
};

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

export const useQueryData = <TVariables = {}, TData = {}>(
  options: IQueryDataOptions<TData, TVariables>
) => {
  const { errorHandlers, ...apolloOptions } = options;
  const [data, setData] = useState<TData | undefined>();
  const client = useApolloClient();
  const componentStatus = { mounted: false };
  useEffect(() => {
    componentStatus.mounted = true;
    client
      .query<TData, TVariables>({
        ...defaultApolloOptions,
        ...apolloOptions
      })
      .then(result => {
        if (componentStatus.mounted) setData(result.data);
      })
      .catch((error: ApolloError) => {
        if (componentStatus.mounted) handleError(error, errorHandlers);
      });
    return () => {
      componentStatus.mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
};

interface IQueryOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}

interface IQueryDataOptions<TData, TVariables> extends QueryOptions<TVariables, TData> {
  errorHandlers?: ErrorHandlers;
}
