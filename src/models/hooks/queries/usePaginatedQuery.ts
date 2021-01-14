import { DocumentNode } from "graphql";
import { useQuery } from "$hooks";
import { IPaginatedResult } from "./interfaces";
import { WatchQueryFetchPolicy } from "@apollo/client/core";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

const getDateTime = (result: TResult, timestampKey: Timestamp) => {
  if (timestampKey === "createdAt") return (result as ICreatedAtResult).createdAt;
  return (result as IUpdatedAtResult).updatedAt;
};

export const usePaginatedQuery = <TVariables extends IVariables, Result extends TResult>({
  documentNode,
  queryName,
  variables,
  fetchPolicy,
  nextFetchPolicy,
  skip,
  timestampKey = "updatedAt",
  normalizeVariables = (v: TVariables) => v
}: IUsePaginatedOffers<TVariables>) => {
  const history = useHistory();

  const result = useQuery<TVariables, IUsePaginatedOffersResponse<Result>>(documentNode, {
    variables: variables && normalizeVariables(variables),
    fetchPolicy,
    nextFetchPolicy,
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
            dateTime: getDateTime(lastResult, timestampKey),
            uuid: lastResult.uuid
          }
        })
    });
  };

  const refetch = (newVariables: any) => result.refetch(normalizeVariables(newVariables));

  return {
    ...result,
    data: result.data as IUsePaginatedOffersResponse<Result> | undefined,
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
  nextFetchPolicy?: WatchQueryFetchPolicy;
  normalizeVariables?: (variables: TVariables) => TVariables;
  skip?: boolean;
  timestampKey: Timestamp;
}

type Timestamp = "createdAt" | "updatedAt";

export interface IVariables {
  updatedBeforeThan?: {
    uuid: string;
    dateTime: string;
  };
}

type TResult = IUpdatedAtResult | ICreatedAtResult;

interface ICreatedAtResult {
  uuid: string;
  createdAt: string;
}

interface IUpdatedAtResult {
  uuid: string;
  updatedAt: string;
}
