import { UPDATE_COMPANY_USER_PASSWORD } from "$mutations";
import { useMutation } from "$hooks";
import { ICompanyUser } from "$interfaces/CompanyUser";

export const useUpdateCompanyUserPassword = () => {
  const { mutation, ...result } = useMutation<IUpdateCompanyUserPasswordVariables, IResponse>(
    UPDATE_COMPANY_USER_PASSWORD
  );
  return { updatePassword: mutation, ...result };
};

interface IResponse {
  updatePassword: ICompanyUser;
}

export interface IUpdateCompanyUserPasswordVariables {
  oldPassword: string;
  newPassword: string;
}
