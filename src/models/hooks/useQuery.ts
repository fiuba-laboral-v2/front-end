import { useState } from "react";
import { useQuery as apolloUseQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { QueryHookOptions } from "@apollo/react-hooks/lib/types";
import { handleError, ErrorHandlers } from "$models/handleError";
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

export const useQuery = <TVariables extends object = {}, TData extends object = {}>(
  node: DocumentNode,
  options?: IOptions<TData, TVariables>
) => {
  const [alreadyHandledError, setAlreadyHandledError] = useState(false);
  const { data, error, loading } = apolloUseQuery<TData, TVariables>(
    node,
    { variables: options?.variables }
  );
  if (error && !alreadyHandledError) {
    handleError(error, options?.handlers || {});
    setAlreadyHandledError(true);
  }

  return { data, error, loading } as UseQueryResult<TData>;
};

interface IOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  handlers?: ErrorHandlers;
}
