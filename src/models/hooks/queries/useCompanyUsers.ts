import { usePaginatedQuery } from "$hooks";
import { GET_COMPANY_USERS } from "$queries";
import { ICompanyUser } from "$interfaces/CompanyUser";

export const useCompanyUsers = () =>
  usePaginatedQuery<{}, ICompanyUser>({
    documentNode: GET_COMPANY_USERS,
    queryName: "getCompanyUsers",
    variables: {},
    timestampKey: "updatedAt"
  });
