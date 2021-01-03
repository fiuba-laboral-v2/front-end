import { UPDATE_COMPANY_USER } from "$mutations";
import { useMutation } from "$hooks";

export const useUpdateCompanyUser = () => {
  const { mutation, ...result } = useMutation<IUseUpdateCompanyUser>(UPDATE_COMPANY_USER);
  return { updateCompanyUser: mutation, ...result };
};

export interface IUseUpdateCompanyUser {
  user: {
    uuid: string;
    name: string;
    surname: string;
    email: string;
    position: string;
  };
}
