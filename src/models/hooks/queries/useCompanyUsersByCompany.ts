import { usePaginatedQuery } from "$hooks";
import { GET_COMPANY_USERS_BY_COMPANY } from "$queries";
import { ICompanyUser } from "$interfaces/CompanyUser";

export const useCompanyUsersByCompany = (companyUuid: string) =>
  usePaginatedQuery<{}, ICompanyUser>({
    documentNode: GET_COMPANY_USERS_BY_COMPANY,
    queryName: "getCompanyUsersByCompany",
    variables: { companyUuid },
    timestampKey: "createdAt"
  });
