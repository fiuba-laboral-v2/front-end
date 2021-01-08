import { CREATE_COMPANY } from "$mutations";
import { useMutation } from "$hooks";
import { ICompany } from "$interfaces/Company";
import { ICompanyUserInput } from "$interfaces/User";

export const useCreateCompany = () => {
  const { mutation, ...result } = useMutation<ICreateCompany, { createCompany: ICompany }>(
    CREATE_COMPANY,
    { fetchPolicy: "no-cache" }
  );
  return { createCompany: mutation, ...result };
};

export interface ICreateCompany {
  user: ICompanyUserInput;
  cuit: string;
  companyName: string;
  businessName: string;
  businessSector: string;
  hasAnInternshipAgreement: boolean;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  photos?: string[];
}
