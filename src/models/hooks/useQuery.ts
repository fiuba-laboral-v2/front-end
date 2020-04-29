import { useQuery as apolloUseQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { QueryHookOptions } from "@apollo/react-hooks/lib/types";
import { QueryResult } from "@apollo/react-common";
import { handleError, IErrorHandlers } from "$models/handleError";

export const useQuery = <TData = void, TVariables = void>(
  node: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
  handlers?: IErrorHandlers
) => {
  const { data, error, loading } = apolloUseQuery<TData, TVariables>(node, options);
  if (error) {
    handleError(error, handlers || {});
  }
  return { data, loading } as QueryResult<TData, TVariables>;
};
