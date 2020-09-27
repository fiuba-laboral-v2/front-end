import { UPDATE_CURRENT_COMPANY } from "$mutations";
import { useMutation } from "$hooks";

export const useUpdateCurrentCompany = () => {
  const {
    mutation,
    ...result
  } = useMutation<IUpdateCurrentCompanyVariables>(UPDATE_CURRENT_COMPANY);
  return { updateCurrentCompany: mutation, ...result };
};

export interface IUpdateCurrentCompanyVariables {
  uuid: string;
  companyName?: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  photos?: string[];
}
