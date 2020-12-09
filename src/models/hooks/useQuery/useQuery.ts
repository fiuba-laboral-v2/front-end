import { useEffect, useState } from "react";
import { ApolloError, useApolloClient } from "@apollo/client";
import { ErrorHandlers, handleError } from "$models/handleError";
import { QueryOptions } from "@apollo/client/core/watchQueryOptions";
import { defaultApolloOptions } from "./defaultApolloOptions";

interface IQueryDataOptions<TData, TVariables> extends QueryOptions<TVariables, TData> {
  errorHandlers?: ErrorHandlers;
}

/**
 * Use this hook unless you need to use fetchMode, use refetch, or access the
 * error object outside of an errorHandler. In that case, consider useAdvancedQuery.
 */
export const useQuery = <TVariables = {}, TData = {}>(
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
