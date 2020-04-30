import { LOGIN } from "$mutations";
import { useMutation } from "$hooks";

export const useLogin = () =>
  useMutation<ILoginVariables, { login: string }>(LOGIN, { fetchPolicy: "no-cache" });

export interface ILoginVariables {
  email: string;
  password: string;
}
