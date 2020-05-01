import { useMutation as apolloUseMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { MutationHookOptions } from "@apollo/react-hooks/lib/types";
import { MutationFunctionOptions, MutationResult } from "@apollo/react-common";
import { handleError, ErrorHandlers } from "$models/handleError";
import { omitTypename } from "$models/omitTypename";
import { ApolloError } from "apollo-client";

export const useMutation = <TVariables extends object = {}, TData extends object = {}>(
  mutation: DocumentNode,
  mutationHookOptions?: MutationHookOptions<TData, TVariables>
): MutationFunctionResult<TData, TVariables> => {
  const [mutationFunction] = apolloUseMutation(
    mutation,
    mutationHookOptions
  ) as MutationTuple<TData, TVariables>;

  return async (options?: IOptions<TData, TVariables>): Promise<UseMutationResult<TData>> => {
    try {
      const { variables, handlers, ...otherOptions } = options || { variables: {} };
      return await mutationFunction({ variables: omitTypename(variables), ...otherOptions });
    } catch (error) {
      handleError(error, options?.handlers || {});
      return { error, data: undefined };
    }
  };
};

export type UseMutationResult<T> = IErroredMutation | ISuccessfulMutation<T>;

type IErroredMutation = {
  data: undefined;
  error: ApolloError;
};

type ISuccessfulMutation<T> = {
  data: T;
  error: undefined;
};

interface IOptions<TData, TVariables> extends MutationFunctionOptions<TData, TVariables> {
  handlers?: ErrorHandlers;
}

type MutationFunctionResult<TData, TVariables> = (
  options?: IOptions<TData, TVariables>
) => Promise<UseMutationResult<TData>>;

type MutationFunction<TData, TVariables> =
  (options?: MutationFunctionOptions<TData, TVariables>) => Promise<UseMutationResult<TData>>;

type MutationTuple<TData, TVariables> = [
  MutationFunction<TData, TVariables>,
  MutationResult<TData>
];
