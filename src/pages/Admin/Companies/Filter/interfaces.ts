import { IUseCompaniesFilter } from "$hooks";
import { CompaniesFilter } from "$models/SearchFilters/CompaniesFilter";

export interface ITranslations {
  companyName: string;
  businessSector: string;
}

export interface IContainerProps {
  showFilter: boolean;
  filter: CompaniesFilter;
  refetchCompanies?: (filter: IUseCompaniesFilter) => void;
}

export interface IFormValues extends Required<IUseCompaniesFilter> {
  _form: string;
}
