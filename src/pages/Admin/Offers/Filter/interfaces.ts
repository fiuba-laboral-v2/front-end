import { IUseOffersFilter } from "$hooks";
import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { ICareer } from "$interfaces/Career";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

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

export interface IFormValues {
  careers: ICareer[];
  companyName: string;
  businessSector: string;
  title: string;
  approvalStatus: ApprovalStatus | "";
  _form: string;
}
