import { useMutation as apolloUseMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { MutationHookOptions } from "@apollo/react-hooks/lib/types";
import { MutationFunctionOptions, MutationResult } from "@apollo/react-common";

export const useMutation = <TData = void, TVariables = void>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>
) => apolloUseMutation(mutation, options) as MutationTuple<TData, TVariables>;

type MutationTuple<TData, TVariables> = [
  (options?: MutationFunctionOptions<TData, TVariables>) => Promise<ExecutionResult<TData>>,
  MutationResult<TData>
];

type ExecutionResult<TData> = {
  data: TData;
  extensions?: Record<string, any>;
};
