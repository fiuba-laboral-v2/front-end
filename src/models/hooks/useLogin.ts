import { LOGIN } from "$mutations";
import { useMutation } from "$hooks";

export const useLogin = () =>
  useMutation<{ login: string }, ILoginVariables>(LOGIN, { fetchPolicy: "no-cache" });

export interface ILoginVariables {
  email: string;
  password: string;
}
