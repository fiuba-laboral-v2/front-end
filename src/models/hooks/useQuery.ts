import { useState } from "react";
import { useQuery as apolloUseQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { QueryHookOptions } from "@apollo/react-hooks/lib/types";
import { ErrorHandlers, handleError } from "$models/handleError";
import { ApolloError } from "apollo-client";

export type UseQueryResult<T> =
  ILoadingQuery | IErroredQuery | ISuccessfulQuery<T>;

type ILoadingQuery = {
  data: undefined;
  error: undefined;
  loading: true;
};

type IErroredQuery = {
  data: undefined;
  error: ApolloError;
  loading: false;
};

type ISuccessfulQuery<T> = {
  data: T;
  error: undefined;
  loading: false;
};

export const useQuery = <TVariables = {}, TData = {}>(
  node: DocumentNode,
  options?: IQueryOptions<TData, TVariables>
) => {
  const [alreadyHandledError, setAlreadyHandledError] = useState(false);
  const { errorHandlers, ...apolloOptions } = options || { errorHandlers: {} };
  const { data, error, loading } = apolloUseQuery<TData, TVariables>(node, apolloOptions);
  if (error && !alreadyHandledError) {
    handleError(error, errorHandlers);
    setAlreadyHandledError(true);
  }

  return { data, error, loading } as UseQueryResult<TData>;
};

interface IQueryOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}
