import { LOGIN } from "$mutations";
import { IMutationOptions, useMutation, UseMutationResult } from "$hooks";
import { useApolloClient } from "@apollo/client";

export const useLogin = () => {
  const { mutation, ...result } = useMutation<ILoginVariables, { login: string }>(LOGIN);
  const client = useApolloClient();

  const login = async (
    options?: IMutationOptions<{ login: string }, ILoginVariables>
  ): Promise<UseMutationResult<{ login: string }>> => {
    const mutationResult = await mutation(options);
    await client.clearStore();
    return mutationResult;
  };

  return { login, ...result };
};

export interface ILoginVariables {
  email: string;
  password: string;
}
