import { SAVE_COMPANY_USER } from "$mutations";
import { useMutation } from "$hooks";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { IUserInput } from "$interfaces/User";

export const useSaveCompanyUser = () => {
  const { mutation, ...result } = useMutation<ISaveCompanyUserInput, IResponseProps>(
    SAVE_COMPANY_USER
  );
  return { saveCompanyUser: mutation, ...result };
};

interface IResponseProps {
  saveCompanyUser: ICompanyUser;
}

export interface ISaveCompanyUserInput {
  user: IUserInput;
}
