import {
  ApolloError,
  QueryFunctionOptions,
  QueryHookOptions,
  QueryResult,
  useLazyQuery as apolloUseLazyQuery
} from "@apollo/client";
import { DocumentNode } from "graphql";
import { ErrorHandlers, handleError } from "$models/handleError";
import { omitTypename } from "$models/omitTypename";

export const useLazyQuery = <TVariables extends object = {}, TData extends object = {}>(
  documentNode: DocumentNode,
  queryHookOptions?: QueryHookOptions<TData, TVariables>
): ILazyQueryHookResponse<TData, TVariables> => {
  const [queryFunction, result] = apolloUseLazyQuery(documentNode, queryHookOptions) as QueryTuple<
    TData,
    TVariables
  >;

  const query = async (
    options?: IQueryOptions<TData, TVariables>
  ): Promise<UseLazyQueryResult<TData>> => {
    try {
      const { variables, errorHandlers, ...otherOptions } = options || { variables: {} };
      return await queryFunction({ variables: omitTypename(variables), ...otherOptions });
    } catch (error) {
      handleError(error, options?.errorHandlers || {});
      return { error, data: undefined };
    }
  };

  return { query, ...result };
};

type UseLazyQueryResult<T> = IErroredQuery | ISuccessfulQuery<T>;

type IErroredQuery = {
  data: undefined;
  error: ApolloError;
};

type ISuccessfulQuery<T> = {
  data: T;
  error: undefined;
};

interface IQueryOptions<TData, TVariables> extends QueryFunctionOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}

type QueryFunctionResult<TData, TVariables> = (
  options?: IQueryOptions<TData, TVariables>
) => Promise<UseLazyQueryResult<TData>>;

type QueryFunction<TData, TVariables> = (
  options?: QueryFunctionOptions<TData, TVariables>
) => Promise<UseLazyQueryResult<TData>>;

type QueryTuple<TData, TVariables> = [QueryFunction<TData, TVariables>, QueryResult<TData>];

interface ILazyQueryHookResponse<TData, TVariables> {
  query: QueryFunctionResult<TData, TVariables>;
  loading: boolean;
}
