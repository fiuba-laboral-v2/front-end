import { CREATE_COMPANY } from "$mutations";
import { useMutation } from "$hooks";
import { ICompany } from "$interfaces/Company";
import { IUserInput } from "$interfaces/User";

export const useCreateCompany = () => {
  const { mutation, ...result } = useMutation<ICreateCompany, { createCompany: ICompany }>(
    CREATE_COMPANY,
    { fetchPolicy: "no-cache" }
  );
  return { createCompany: mutation, ...result };
};

export interface ICreateCompany {
  user: IUserInput;
  cuit: string;
  companyName: string;
  businessName: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  photos?: string[];
}
