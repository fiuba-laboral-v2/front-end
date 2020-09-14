import { DocumentNode } from "graphql";
import { useQuery } from "../useQuery";
import { IPaginatedResult } from "./interface";
import { WatchQueryFetchPolicy } from "@apollo/client/core";

export const usePaginatedQuery = <entityType extends IResult>(
  {
    documentNode,
    queryName,
    variables,
    fetchPolicy,
    normalizeVariables = (v: any) => v
  }: IUsePaginatedOffers
) => {
  const result = useQuery<{}, IUsePaginatedOffersResponse<entityType>>(documentNode, {
    variables: normalizeVariables(variables),
    fetchPolicy
  });

  const fetchMore = () => {
    const results = result.data && result.data[queryName].results;
    if (!results) return;
    const lastResult = results[results.length - 1];
    return result.fetchMore({
      variables: normalizeVariables({
        ...variables,
        updatedBeforeThan: {
          dateTime: lastResult.updatedAt,
          uuid: lastResult.uuid
        }
      })
    });
  };

  const refetch = (newVariables: any) => result.refetch(normalizeVariables(newVariables));

  return {
    ...result,
    data: result.data as IUsePaginatedOffersResponse<entityType>,
    fetchMore: result.loading ? undefined : fetchMore,
    refetch: result.loading ? undefined : refetch
  };
};

interface IUsePaginatedOffersResponse<entityType> {
  [queryName: string]: IPaginatedResult<entityType>;
}

interface IUsePaginatedOffers {
  documentNode: DocumentNode;
  queryName: string;
  variables?: any;
  fetchPolicy?: WatchQueryFetchPolicy;
  normalizeVariables?: (variables: any) => any;
}

interface IResult {
  uuid: string;
  updatedAt: string;
}
