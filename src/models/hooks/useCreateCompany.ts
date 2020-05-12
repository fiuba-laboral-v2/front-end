import { CREATE_COMPANY } from "$mutations";
import { useMutation } from "$hooks";
import { ICompany } from "$interfaces/Company";

export const useCreateCompany = () =>
  useMutation<ICreateCompany, { createCompany: ICompany }>(
    CREATE_COMPANY,
    { fetchPolicy: "no-cache" }
  );

interface ICreateCompany {
  user: {
    email: string;
    password: string;
    name: string;
    surname: string;
  };
  cuit: string;
  companyName: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  photos?: string[];
}
