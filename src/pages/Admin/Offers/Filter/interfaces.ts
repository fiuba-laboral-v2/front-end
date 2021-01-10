import { IUseOffersFilter } from "$hooks";
import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { ICareer } from "$interfaces/Career";

export interface ITranslations {
  companyName: string;
  businessSector: string;
  title: string;
  approvalStatus: string;
  careerCodes: string;
}

export interface IContainerProps {
  showFilter: boolean;
  filter: OffersFilter;
  refetchOffers?: (filter: IUseOffersFilter) => void;
}

export interface IFormValues extends Required<Omit<IUseOffersFilter, "careerCodes">> {
  careers: ICareer[];
  _form: string;
}
