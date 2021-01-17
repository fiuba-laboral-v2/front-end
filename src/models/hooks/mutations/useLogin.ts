import { IMutationOptions, UseMutationResult, IHookResponse } from "$hooks";
import { SessionStorageRepository } from "$repositories";
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
    SessionStorageRepository.clear();
    return mutationResult;
  };

  return { login, ...result };
};
