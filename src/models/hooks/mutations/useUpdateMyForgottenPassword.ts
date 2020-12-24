import { UPDATE_MY_FORGOTTEN_PASSWORD } from "$mutations";
import { useMutation } from "$hooks";
import { ICompanyUser } from "$interfaces/CompanyUser";

export const useUpdateMyForgottenPassword = () => {
  const { mutation, ...result } = useMutation<IUpdateMyForgottenPasswordVariables, IResponse>(
    UPDATE_MY_FORGOTTEN_PASSWORD
  );
  return { updateMyForgottenPassword: mutation, ...result };
};

interface IResponse {
  updateMyForgottenPassword: ICompanyUser;
}

export interface IUpdateMyForgottenPasswordVariables {
  token: string;
  newPassword: string;
}
