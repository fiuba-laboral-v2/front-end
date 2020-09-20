import { UPDATE_CURRENT_COMPANY } from "$mutations";
import { useMutation } from "$hooks";

export const useUpdateCurrentCompany = () =>
  useMutation<IUpdateCurrentCompanyVariables>(UPDATE_CURRENT_COMPANY);

export interface IUpdateCurrentCompanyVariables {
  uuid: string;
  companyName?: string;
  businessName?: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  photos?: string[];
}
