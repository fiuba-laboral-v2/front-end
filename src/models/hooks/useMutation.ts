import { useMutation as apolloUseMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { MutationHookOptions } from "@apollo/react-hooks/lib/types";
import { MutationFunctionOptions, MutationResult } from "@apollo/react-common";
import { isArray, isPlainObject, omit } from "lodash";

export const omitTypename = (variables: any) => {
  if (!isPlainObject(variables)) return variables;
  Object.keys(variables).forEach(key => {
    if (isPlainObject(variables[key])) {
      variables[key] = omitTypename(variables[key]);
    }
    if (isArray(variables[key])) {
      variables[key] = variables[key].map((value: any) => omitTypename(value));
    }
  });
  return omit(variables, "__typename");
};

export const useMutation = <TVariables extends object = {}, TData extends object = {}>(
  mutation: DocumentNode,
  mutationHookOptions?: MutationHookOptions<TData, TVariables>
): MutationFunction<TData, TVariables> => {
  const [mutationFunction] = apolloUseMutation(
    mutation,
    mutationHookOptions
  ) as MutationTuple<TData, TVariables>;

  return (mutationFunctionOptions?: MutationFunctionOptions<TData, TVariables>) => {
    const { variables, ...otherOptions } = mutationFunctionOptions || { variables: {} };
    return mutationFunction({ variables: omitTypename(variables), ...otherOptions });
  };
};

type ExecutionResult<TData> = {
  data: TData;
  extensions?: Record<string, any>;
};

type MutationFunction<TData, TVariables> =
  (options?: MutationFunctionOptions<TData, TVariables>) => Promise<ExecutionResult<TData>>;

type MutationTuple<TData, TVariables> = [
  MutationFunction<TData, TVariables>,
  MutationResult<TData>
];
