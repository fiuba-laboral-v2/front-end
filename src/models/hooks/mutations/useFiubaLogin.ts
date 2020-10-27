import { FIUBA_LOGIN } from "$mutations";
import { useLogin, useMutation } from "$hooks";

export const useFiubaLogin = () => {
  const result = useMutation<IFiubaLoginVariables, { fiubaLogin: string }>(FIUBA_LOGIN);
  return useLogin(result);
};

export interface IFiubaLoginVariables {
  dni: string;
  password: string;
}
