import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";
import { IUseMyOffersFilter } from "$hooks";

export interface ITranslations {
  title: string;
  hideRejectedAndExpiredOffers: string;
}

export interface IContainerProps {
  filter: CompanyOffersFilter;
  refetchOffers?: (filter: IUseMyOffersFilter) => void;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
  onClick: () => void;
}
