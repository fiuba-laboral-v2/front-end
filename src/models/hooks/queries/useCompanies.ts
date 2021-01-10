import { IVariables, usePaginatedQuery } from "$hooks";
import { CompaniesFilter } from "$models/SearchFilters/CompaniesFilter";
import { GET_COMPANIES } from "$queries";
import { ICompany } from "$interfaces/Company";

export const useCompanies = (filter: CompaniesFilter) =>
  usePaginatedQuery<Variables, ICompany>({
    documentNode: GET_COMPANIES,
    queryName: "getCompanies",
    variables: filter.getValues(),
    timestampKey: "updatedAt"
  });

type Variables = IUseCompaniesFilter & IVariables;

export interface IUseCompaniesFilter {
  companyName?: string;
  businessSector?: string;
}
