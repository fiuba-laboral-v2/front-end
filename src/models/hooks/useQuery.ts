import { useQuery as apolloUseQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { QueryHookOptions } from "@apollo/react-hooks/lib/types";
import { QueryResult } from "@apollo/react-common";
import { handleError, ErrorHandlers } from "$models/handleError";

export const useQuery = <TVariables extends object = {}, TData extends object = {}>(
  node: DocumentNode,
  options?: IOptions<TData, TVariables>
) => {
  const { data, error, loading } = apolloUseQuery<TData, TVariables>(node, options?.queryOptions);
  if (error) {
    handleError(error, options?.handlers || {});
  }
  return { data, loading } as QueryResult<TData, TVariables>;
};

interface IOptions<TData, TVariables> {
  queryOptions?: QueryHookOptions<TData, TVariables>;
  handlers?: ErrorHandlers;
}
