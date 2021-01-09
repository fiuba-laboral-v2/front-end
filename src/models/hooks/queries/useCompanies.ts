import { IVariables, usePaginatedQuery } from "$hooks";
import { GET_COMPANIES } from "$queries";
import { ICompany } from "$interfaces/Company";

export const useCompanies = (filter: IUseCompaniesFilter = {}) =>
  usePaginatedQuery<Variables, ICompany>({
    documentNode: GET_COMPANIES,
    queryName: "getCompanies",
    variables: filter,
    timestampKey: "updatedAt"
  });

type Variables = IUseCompaniesFilter & IVariables;

export interface IUseCompaniesFilter {
  companyName?: string;
  businessSector?: string;
}
