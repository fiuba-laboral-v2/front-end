import { IMutationOptions, UseMutationResult, IHookResponse } from "$hooks";
import { useApolloClient } from "@apollo/client";

export const useLogin = <TVariables extends object, TData extends object>({
  mutation,
  ...result
}: IHookResponse<TData, TVariables>) => {
  const client = useApolloClient();

  const login = async (
    options?: IMutationOptions<TData, TVariables>
  ): Promise<UseMutationResult<TData>> => {
    const mutationResult = await mutation(options);
    await client.clearStore();
    return mutationResult;
  };

  return { login, ...result };
};
