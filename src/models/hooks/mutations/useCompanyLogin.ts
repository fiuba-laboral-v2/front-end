import { COMPANY_LOGIN } from "$mutations";
import { useLogin, useMutation } from "$hooks";

export const useCompanyLogin = () => {
  const result = useMutation<ICompanyLoginVariables, { companyLogin: string }>(COMPANY_LOGIN);
  return useLogin(result);
};

export interface ICompanyLoginVariables {
  email: string;
  password: string;
}
