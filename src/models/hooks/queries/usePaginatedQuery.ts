import { DocumentNode } from "graphql";
import { useQuery } from "../useQuery";
import { IPaginatedResult } from "./interface";
import { WatchQueryFetchPolicy } from "@apollo/client/core";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const usePaginatedQuery = <TVariables extends IVariables, Result extends IResult>({
  documentNode,
  queryName,
  variables,
  fetchPolicy,
  skip,
  normalizeVariables = (v: TVariables) => v
}: IUsePaginatedOffers<TVariables>) => {
  const history = useHistory();

  const result = useQuery<TVariables, IUsePaginatedOffersResponse<Result>>(documentNode, {
    variables: variables && normalizeVariables(variables),
    fetchPolicy,
    errorHandlers: {
      UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden())
    },
    skip
  });

  const fetchMore = () => {
    const results = result.data && result.data[queryName].results;
    if (!results) return;
    const lastResult = results[results.length - 1];
    return result.fetchMore({
      variables:
        variables &&
        normalizeVariables({
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
    data: result.data as IUsePaginatedOffersResponse<Result>,
    fetchMore: result.loading ? undefined : fetchMore,
    refetch: result.loading ? undefined : refetch
  };
};

interface IUsePaginatedOffersResponse<Result> {
  [queryName: string]: IPaginatedResult<Result>;
}

interface IUsePaginatedOffers<TVariables> {
  documentNode: DocumentNode;
  queryName: string;
  variables: TVariables;
  fetchPolicy?: WatchQueryFetchPolicy;
  normalizeVariables?: (variables: TVariables) => TVariables;
  skip?: boolean;
}

export interface IVariables {
  updatedBeforeThan?: {
    uuid: string;
    dateTime: string;
  };
}

interface IResult {
  uuid: string;
  updatedAt: string;
}
