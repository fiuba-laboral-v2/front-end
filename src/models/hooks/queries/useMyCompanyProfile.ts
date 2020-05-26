import { useQuery } from "../useQuery";
import { GET_MY_COMPANY_PROFILE } from "$queries";
import { ICompany } from "../../../interfaces/Company";

export const useMyCompanyProfile = () =>
  useQuery<{}, { getCurrentUser: { company: ICompany } }>(GET_MY_COMPANY_PROFILE);
