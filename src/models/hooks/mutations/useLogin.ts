import { LOGIN } from "$mutations";
import { IMutationOptions, useMutation, UseMutationResult } from "$hooks";
import { useApolloClient } from "@apollo/client";

export const useLogin = () => {
  const mutation = useMutation<ILoginVariables, { login: string }>(LOGIN);
  const client = useApolloClient();

  return async (
    options?: IMutationOptions<{ login: string }, ILoginVariables>
  ): Promise<UseMutationResult<{ login: string }>> => {
    const mutationResult = await mutation(options);
    await client.clearStore();
    return mutationResult;
  };
};

export interface ILoginVariables {
  email: string;
  password: string;
}
