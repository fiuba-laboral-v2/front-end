import { usePaginatedQuery } from "$hooks";
import { GET_COMPANIES } from "$queries";
import { ICompany } from "$interfaces/Company";

export const useCompanies = () =>
  usePaginatedQuery<{}, ICompany>({
    documentNode: GET_COMPANIES,
    queryName: "getCompanies",
    variables: {},
    timestampKey: "updatedAt"
  });
