import { useMutation as apolloUseMutation } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { MutationHookOptions } from "@apollo/react-hooks/lib/types";
import { MutationFunctionOptions, MutationResult } from "@apollo/react-common";
import { handleError, ErrorHandlers } from "$models/handleError";

export const useMutation = <TData = void, TVariables = void>(
  mutationNode: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>
) => {
  const [mutation] = apolloUseMutation(mutationNode, options) as MutationTuple<TData, TVariables>;
  return async (
    variables: MutationFunctionOptions<TData, TVariables>,
    handlers: ErrorHandlers
  ) => {
    try {
      return await mutation(variables);
    } catch (error) {
      return handleError(error, handlers) as any;
    }
  };
};

type MutationTuple<TData, TVariables> = [
  (options?: MutationFunctionOptions<TData, TVariables>) => Promise<ExecutionResult<TData>>,
  MutationResult<TData>
];

type ExecutionResult<TData> = {
  data: TData;
  extensions?: Record<string, any>;
};
